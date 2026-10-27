'use server'

import { streamText } from 'ai'
import { createStreamableValue } from '@ai-sdk/rsc'
import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { generateEmbedding } from '@/lib/gemini'
import { db } from '@/server/db'

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
})

const MAX_CONTEXT_CHARS = 45_000
const MAX_FILE_CHARS = 8_000

export async function askQuestion(question: string, projectId: string) {
  const stream = createStreamableValue()
  const fileReferences: { fileName: string; sourceCode: string; summary: string }[] = []

  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not configured on the server')
    }

    const normalizedQuestion = question.trim()
    if (!normalizedQuestion) {
      throw new Error('Please enter a question')
    }

    const queryVector = await generateEmbedding(normalizedQuestion)
    if (!queryVector?.length) {
      throw new Error('Could not create an embedding for your question. Check the Gemini API key and model access.')
    }

    const vectorQuery = `[${queryVector.join(',')}]`

    const result = await db.$queryRaw`
      SELECT "fileName", "sourceCode", "summary",
        1 - ("summaryEmbedding" <=> ${vectorQuery}::vector) AS "similarity"
      FROM "SourceCodeEmbedding"
      WHERE "projectId" = ${projectId}
        AND "summaryEmbedding" IS NOT NULL
      ORDER BY "summaryEmbedding" <=> ${vectorQuery}::vector ASC
      LIMIT 10
    ` as {
      fileName: string
      sourceCode: string
      summary: string
      similarity: number
    }[]

    if (!result.length) {
      throw new Error('No indexed code was found for this project. Re-index the repository and try again.')
    }

    fileReferences.push(...result)

    let context = ''
    for (const doc of result) {
      const entry = [
        `File: ${doc.fileName}`,
        `Summary: ${doc.summary || '(no summary available)'}`,
        `Relevant source excerpt:\n${(doc.sourceCode || '').slice(0, MAX_FILE_CHARS)}`,
      ].join('\n')

      if (context.length + entry.length > MAX_CONTEXT_CHARS) break
      context += `${entry}\n\n---\n\n`
    }

    const { textStream } = streamText({
      model: google('gemini-3.6-flash'),
      system: `You are GitGenius, a concise and accurate senior software engineer helping developers understand a repository.
Answer the user's question using the repository context. Mention relevant file paths.
If context does not support an answer, say so and suggest what file or information would be needed.
Use Markdown. Keep the answer useful and focused. Do not invent codebase details.`,
      prompt: `Repository context:\n\n${context}\n\nUser question:\n${normalizedQuestion}`,
      maxOutputTokens: 2048,
      onError({ error }) {
        console.error('[GitGenius askQuestion] Gemini streaming error:', error)
      },
    })

    for await (const chunk of textStream) {
      stream.update(chunk)
    }
    stream.done()
  } catch (error) {
    console.error('[GitGenius askQuestion] Failed:', error)
    const message =
      error instanceof Error ? error.message : 'An unexpected error occurred while generating the answer.'
    stream.update(`Unable to generate an answer: ${message}`)
    stream.done()
  }

  return {
    output: stream.value,
    fileRefernces: fileReferences,
  }
}
