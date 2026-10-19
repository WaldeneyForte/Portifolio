# Waldeney Filho — Portfolio

A bilingual personal portfolio showcasing my work in artificial intelligence, machine learning, and data science. The site brings together my projects, experience, education, and professional contact information.

## About me

I'm a Computer Science student at Ceará State University (UECE) and a Data Scientist at CPIDT, working on applied AI research for healthcare. My interests include speech and language processing, machine learning, and understanding neural networks from first principles.

## Featured projects

- **TEDAS-CE** — Research exploring clinical speech transcription and information extraction to support sepsis-related analysis.
- **MIND-BH** — Research into acoustic and linguistic speech patterns associated with cognitive impairment.
- **Neural Networks from Scratch in C (Redes Neurais do Zero em C)** — An ongoing learning project starting with a manually weighted Perceptron implementing an AND gate.

Research projects are presented through public summaries; their source code is not publicly available.

## Built with

React, TypeScript, Vite, Tailwind CSS, GSAP, and @gsap/react. Translations use custom typed dictionaries.

## Features

- Brazilian Portuguese and English.
- Responsive single-page layout with anchor navigation.
- Expandable project details.
- SVG graphics and finite animations with reduced-motion support.
- Professional links and email copying.

## Run locally

Requires Node.js 22.13+ within version 22, or Node.js 24+, and npm 10+.

```bash
npm ci
npm run dev
```

Validation and production build:

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

Open the local URL printed by Vite under `/Portifolio/` (for example,
`http://localhost:4173/Portifolio/` for the production preview).

## GitHub Pages

Configured for the `WaldeneyForte/Portifolio` project site, with Vite base
`/Portifolio/`. The expected address after deployment is
[waldeneyforte.github.io/Portifolio/](https://waldeneyforte.github.io/Portifolio/).
Deployment availability has not yet been verified.

To publish after the reviewed files are committed and pushed to `main`:

1. In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
2. In **Actions**, select **Deploy portfolio to GitHub Pages**, then **Run workflow**
   on `main`.
3. Check the deployment URL and ensure **Enforce HTTPS** is enabled in Pages settings.

The workflow runs only when started manually. It installs dependencies from the
lockfile, runs lint and TypeScript checks, builds the site, and uploads only `dist/`.
It uses the built-in GitHub token; no personal access token is required.
Changing the repository name or using a custom domain requires reviewing the Vite base.

## Project structure

- `src/components/` — Shared interface components.
- `src/sections/` — Portfolio sections.
- `src/data/` — Typed portfolio content.
- `src/i18n/` — Dictionaries and English content.
- `src/motion/` — Animation scenes and lifecycle utilities.
- `src/styles/` — Global styles and design tokens.
- `public/` — Profile photo and favicon.

Update portfolio content in `src/data/` and the corresponding translations in `src/i18n/`. No environment variables are currently required; never place secrets in client-side code.

## Connect

[GitHub](https://github.com/WaldeneyForte) · [LinkedIn](https://www.linkedin.com/in/waldeney-filho/) · [Email](mailto:jose.waldeney.forte@gmail.com)
