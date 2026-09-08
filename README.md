
# 🚀 GitGenius  
*Your AI-powered GitHub Repository Analyzer*  

---

## 🧩 Problem  

Developers and teams often struggle to **understand large or unfamiliar GitHub repositories quickly**.  
Manually checking commits, exploring file changes, or figuring out what’s happening inside a new repo can be:  
- Time-consuming ⏳  
- Hard to understand 🧠  
- Confusing when multiple contributors are involved 🤯  

There’s no easy way to ask —  
> “What did this commit change?”  
> “Who worked most actively on this repo?”  
> “Give me an overview of this repository.”  

---

## 💡 Solution — *Git-Genius*  

**Git-Genius** is an AI-powered platform that helps you **analyze any GitHub repository instantly**.  
It gives you commit insights, summaries, and allows you to **chat with the repository** using natural language.

### 🔍 What it Does  
- 🧠 **Analyzes commits** — generates human-readable summaries of each commit.  
- 💬 **Chat with any repo** — ask questions like *“Explain this PR?”*, *“How does authentication work?”*, or *“Show files related to login flow.”*  
- 📊 **Commit insights** — visualize who contributed, when, and what changed the most.  
- 🪄 **AI-generated summaries** — get concise overviews of repos before cloning or contributing.  

Perfect for developers, reviewers, and hackathon teams who want to **understand codebases faster.**

---

## ⚙️ Key Features  

✅ **GitHub Repo Analysis**  
Just paste any GitHub repo URL — Git-Genius fetches commits, authors, and key metrics automatically.  

✅ **AI-Generated Commit Summaries**  
Each commit is summarized using LLMs for quick understanding.  

✅ **Chat with Repo**  
Ask natural language questions about the repository’s content and history.  

✅ **Interactive Dashboard**  
View commits, contributors, and repository activity in a clean UI.  

✅ **Seamless GitHub Integration**  
Works with public GitHub APIs — no extra configuration required.  

---

## 🧠 Example Use Cases  

- 🧩 **Developers** — Quickly grasp unfamiliar codebases before contributing.  
- 💼 **Project managers** — Track team contributions and project evolution.  
- 🧑‍🏫 **Educators** — Help students understand open-source repositories.  
- ⚡ **Hackathons** — Analyze project repos and showcase team activity transparently.  

---

## 💻 Example Workflow  

**Example:**  
1️⃣ Paste a GitHub repo link → `https://github.com/vercel/next.js`  
2️⃣ Git-Genius analyzes commits and contributors.  
3️⃣ Ask:  
```bash
"What are the main features of this repo?"
"Who made the most commits last week?"
"Explain the authentication module."
````

---

## 🧰 Tech Stack

<div align="center">

| Technology                                                                                                                                       | Description                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png" alt="Next.js" width="40"/> **Next.js**                                             | Framework for building full-stack React apps with API routes        |
| <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript" width="40"/> **TypeScript**                                     | Strongly typed JavaScript for scalable and maintainable development |
| <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwkAeRYLcyG7I3dSkewiNED54fAcVHHobfg&s" alt="Gemini Embeddings" width="40"/> **Gemini Embeddings** | Powers intelligent semantic understanding and commit embeddings     |
| <img src="https://avatars.githubusercontent.com/u/12256050?s=200&v=4" alt="Octokit" width="40"/> **Octokit**                                     | Official GitHub SDK for fetching repo data and commits              |
| <img src="https://codaio.imgix.net/packs/37717/unversioned/assets/EXAMPLE/21e16707d87f10712e5e7f8834bdaff27152a24c093f8dfc59bf273678a4df1d3629d6d9ac52982c913d0bbfa86469e97cc27c459f62421abc47a3d36575456841ba42cb4894d836bb431622dcc13cd0a55cf704e32f04f1929b360c31421b5a0d4cedd9" alt="OpenRouter" width="40"/> **OpenRouter Models**                      | Interface for using advanced LLMs (via OpenRouter API)              |
| <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_poHZD7zedIFVi_xyvSwkXCSsfmhNYElEQA&s" alt="Bun" width="40"/> **Bun**                                     | Ultra-fast JavaScript runtime, bundler, and package manager         |
| <img src="https://logowik.com/content/uploads/images/assemblyai2279.logowik.com.webp" alt="Bun" width="40"/> **AssemblyAi**                                     | Ultra-fast      Generate issues raised in an audio meeting   |

</div>

---

## 🧭 Architecture Overview
```
    User-->Frontend[Next.js + TypeScript (UI)]
    Frontend-->API[Next.js API Routes (Serverless)]
    API-->GitHub[Octokit REST APIs]
    API-->AI[OpenRouter + Gemini Models]
    AI-->Response[Commit Summaries & Repo Insights]
```
---

## 🌟 Why Git-Genius?

✅ **Instant Insights** — Understand repositories in seconds
✅ **AI Chat Interface** — Talk to your codebase naturally
✅ **No Setup Needed** — Just a GitHub link
✅ **Beautiful UI** — Clean dashboard with interactive analytics
✅ **Powered by Bun** — Blazing fast runtime and package management

---

## 📦 Installation (Development Mode)

```bash
# Clone this repository
git clone https://github.com/yourusername/git-genius.git

# Navigate to the project folder
cd git-genius

# Install dependencies
bun install

# Run the development server
bun run dev
```

Then open 👉 `http://localhost:3000` in your browser.

---

## 🧪 Build & Production

```bash
# Create an optimized production build
bun run build

# Start the production server
bun run start
```

---

## 🤝 Contributing

Contributions are welcome!
If you’d like to improve Git-Genius, feel free to **fork** the repo and submit a **pull request**.

---

## 🪪 License

MIT License © 2025 **Git-Genius Team**

---
