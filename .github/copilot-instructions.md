## Repository snapshot

- This repo is a small Next.js + Tailwind landing site for the Noion.cloud vision. Key files in the workspace:
  - `package.json` â€” dev/build scripts and dependencies
  - `pages/` â€” Next.js pages (classic `pages/` routing)
  - `styles/globals.css` â€” Tailwind directives
  - `tailwind.config.js` and `postcss.config.js`
  - `next.config.js`
  - `Hauptseite (Brand-Fokus, Vision, Waitlist, App-Demo).txt` â€” original content file (preserve)

## Quick mental model for agents

- This is a single-page landing app using Next.js (React) + Tailwind. `pages/index.js` is the primary entry; styles are provided by Tailwind in `styles/globals.css` and processed through PostCSS.
- The German content file in the repo root should be preserved unless the user explicitly asks for migration â€” prefer adding a rendered copy under `pages/` instead of renaming the original file.

## Actionable checklist for the agent

1. Ensure Node/npm are available, then run `npm install` from the repo root.
2. Start the dev server with `npm run dev` and preview at http://localhost:3000.
3. Create reusable UI in `components/` and keep route files under `pages/`. If you add backend endpoints, use `pages/api/`.

## Project-specific conventions

- Uses `pages/` routing (not the `app/` directory). Follow that pattern for page and API placement.
- Preserve non-code content filenames and encoding (e.g., the German `Hauptseite ... .txt`). When adding code files, prefer ASCII/kebab-case (e.g., `components/hero.js`).
- Tailwind is configured via `tailwind.config.js` and consumed in `styles/globals.css` with `@tailwind` directives â€” install dependencies before running the dev server so PostCSS/Tailwind processing succeeds.

## Integration & secrets

- No runtime integrations or credentials exist in the repo. The path suggests SolarEdgeCloud integration intentions â€” do not add real credentials. Add `.env.local.example` placeholders and request secrets from the user if needed.

## How to run (PowerShell)

```powershell
npm install
npm run dev
```

Open http://localhost:3000 to preview the site.

## Files to inspect when changing common things

- `pages/index.js` â€” hero, feature cards, and waitlist form
- `pages/_app.js` â€” global styles import
- `styles/globals.css` â€” Tailwind directives
- `tailwind.config.js` / `postcss.config.js` â€” build tool config
- `package.json` â€” scripts and dependency pins

## PR guidance

- Keep changes small and descriptive. When adding packages, update `package.json` and explain rationale in the PR description. Add/update `README.md` with any new developer commands.

If you'd like, I can:

- convert `Hauptseite (Brand-Fokus, Vision, Waitlist, App-Demo).txt` into a rendered `pages/content.md`; or
- add a small waitlist API route in `pages/api/waitlist.js` that appends emails to a CSV (or creates GitHub issues); or
- scaffold a GitHub Actions workflow to run `npm ci && npm run build` on pushes.

Tell me which of these you'd like next and I'll implement it.

## Repository snapshot

- This repository currently contains only a single content file: `Hauptseite (Brand-Fokus, Vision, Waitlist, App-Demo).txt` (empty). No package manifests (package.json, pyproject.toml, requirements.txt), build config, or source folders were found during inspection.

## Quick mental model for agents

- Treat this repo as a small website/content repository. The primary artifact is the main landing-page text located at `Hauptseite (Brand-Fokus, Vision, Waitlist, App-Demo).txt`.
- If you need to implement functionality (site build, server, tests), first detect the platform by searching for: `package.json`, `pnpm-lock.yaml`, `yarn.lock`, `pyproject.toml`, `requirements.txt`, `Makefile`, `Dockerfile`, or common framework folders (`src/`, `pages/`, `public/`, `app/`, `templates/`). Do not assume a framework without finding one.

## What to do first (actionable checklist for the agent)

1. Run a workspace search for the common manifest and config files listed above. If none exist, ask the user whether they want a static site (HTML/CSS), a framework (Next/Vite/Svelte), or a plain content repo.
2. If a manifest is found, use that to infer build/test commands and update the README accordingly. Example: if `package.json` exists, use `npm run dev` / `npm run build` as documented in that file.
3. Preserve text encoding and filenames: the repo uses a German title for the main page â€” avoid renaming files unless requested.

## Patterns and conventions discovered

- File naming: the main page file uses spaces and parentheses in its name. When creating new files, prefer simple ASCII filenames (kebab-case) for code files, but preserve existing content filenames unless the user asks for normalization.
- No explicit tests or CI discovered. If you add tests or CI, document the commands in `README.md` and add a minimal `.github/workflows/` workflow only after confirming the intended language/tooling.

## Integration & external dependencies

- No explicit external integrations or API keys found in the repository content. The workspace path mentions "Noion-SolarEdgeCloud" â€” treat any inference about SolarEdge or cloud integrations as speculative and verify with the user before adding credentials or integrations.

## Guidance for edits and PRs

- Make minimal, well-scoped changes. For content edits to the Hauptseite file, open a single commit that updates only that file and an updated `README.md` describing how to preview the content locally.
- If scaffolding a project (e.g., adding a Next.js app), include a short README, a single dev script, and ask the user for deployment preferences before adding CI/CD.

## Examples (how to detect and act)

- Example: if you find `package.json` with scripts `{"dev":"next dev","build":"next build"}`, prefer Next.js-specific patterns (put pages in `pages/` or `app/`, use `public/` for assets). Update `README.md` with the exact npm scripts.
- Example: if you find `pyproject.toml`, infer a Python backend and surface commands like `python -m venv .venv; .\.venv\Scripts\activate; pip install -r requirements.txt` (ask the user before running environment changes).

## When you are unsure

- Ask 1â€“2 focused questions: (1) What language/framework should I assume? (2) Do you want me to scaffold a build system or only edit content? Provide suggested options if helpful.

---

If anything here is incomplete or you want this file to be more opinionated (e.g., scaffold a Next/Vite project automatically), tell me which option to prefer and I will update the instructions and scaffold accordingly.

