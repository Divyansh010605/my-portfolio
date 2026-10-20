# Divyansh Khandelwal — Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS. It highlights selected AI/ML, generative AI, and backend engineering projects, with links to their source repositories.

**Live site:** [Divyansh010605.github.io/my-portfolio](https://Divyansh010605.github.io/my-portfolio)

## Featured projects

- [Advance-RIS](https://github.com/Divyansh010605/Advance-RIS) — Explainable chest X-ray screening research project.
- [RAGFlow_Enterprise_AI](https://github.com/Divyansh010605/RAGFlow_Enterprise_AI) — Multi-agent retrieval platform combining documents, SQL, and knowledge graphs.
- [AI-Fake-News-Detection-V2.0](https://github.com/Divyansh010605/AI-Fake-News-Detection-V2.0) — News verification app using DeBERTa and explainable AI.
- [Distributed-Job-Scheduling-Platform](https://github.com/Divyansh010605/Distributed-Job-Scheduling-Platform) — Distributed job scheduler built with Java and Spring Boot.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```powershell
git clone https://github.com/Divyansh010605/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Open the local URL printed by Vite in the terminal (usually `http://localhost:5173/my-portfolio/`). Keep the development server running while viewing the site; press `Ctrl+C` to stop it.

## Validate and build

```powershell
npm run lint
npm run build
```

The production site is generated in the `dist/` directory. To preview that build locally:

```powershell
npm run preview
```

## Deploy to GitHub Pages

The Vite base path and `homepage` are configured for the `my-portfolio` GitHub Pages repository. To build and publish `dist/` to the `gh-pages` branch:

```powershell
npm run deploy
```

The repository must have GitHub Pages enabled and configured to deploy from the `gh-pages` branch.
