## Repository snapshot

- This repo was scaffolded as a small Next.js + Tailwind landing site for the Noion.cloud vision. Key files in the workspace:
  - `package.json` — dev/build scripts and dependencies
  - `pages/` — Next.js pages (uses the classic `pages/` routing)
  - `styles/globals.css` — Tailwind directives
  - `tailwind.config.js` and `postcss.config.js`
  - `next.config.js`
  - `Hauptseite (Brand-Fokus, Vision, Waitlist, App-Demo).txt` — original content file (preserve)

## Quick mental model for agents

- A small Next.js (React) landing app. Tailwind is configured via PostCSS. `pages/index.js` is the main entry.
- Do not rename or remove the German content file unless the user asks; instead offer a migration (rendering the text as markdown or moving into `pages/content.md`).

## Actionable checklist for the agent

1. Run `npm install` locally (see README) before starting the dev server.
2. Start the dev server with `npm run dev` and preview on http://localhost:3000.
3. Add UI under `components/` and pages under `pages/`; Tailwind classes are used across the app.

## Project-specific conventions

- Uses `pages/` routing (not the new `app/` directory). If you add SSR/API handlers, use `pages/api/`.
- Keep new code files ASCII/kebab-case; preserve the original content filename and encoding.
- Add environment placeholders in `.env.local.example` (do not commit real secrets).

## How to run (PowerShell)

```powershell
npm install
npm run dev
```

## Files to look at for common edits

- `pages/index.js` — layout and hero/waitlist demo
- `styles/globals.css` — Tailwind `@tailwind` directives
- `tailwind.config.js` — content paths
- `package.json` — scripts and deps

## PR guidance

- Keep commits small and focused. When adding dependencies, include rationale in the PR description and update `README.md` with new commands.

If you'd like me to replace the original `.github/copilot-instructions.md` file with this content I can do that (I tried but encountered a merge/write mismatch). Tell me to proceed and I'll overwrite the original file.
