# Pitboard

A shitpost-core but functioning Pitbull (the artist) soundboard. Vite + React + TypeScript, no backend.

## Stack
- Vite, React 19, TypeScript, oxlint, prettier
- No test suite (joke scaffold) — verification is `tsc --noEmit`, `npm run lint`, `npm run build`, and a manual/Playwright click-through

## How sounds work
- `src/soundboard.ts` — data: one entry per button (`id`, `label`, `emoji`, `ttsText`, optional `rate`/`pitch`, optional `isBark`)
- `src/audio.ts` — `playSound()`: checks for `/sounds/${id}.mp3` first (real audio override), falls back to `window.speechSynthesis` TTS, or a synthesized noise-burst bark for the `isBark` entry
- `public/sounds/` — drop a real mp3 named `${id}.mp3` here to replace TTS/synthesis for that button; see `public/sounds/README.md`
- No copyrighted Pitbull audio is bundled — everything is generated client-side by design

## Commands
- `npm run dev` — dev server
- `npm run build` — `tsc -b && vite build`
- `npm run lint` — oxlint
- `npx prettier -w .` — format

## Deployment
- Static site, deployed to GitHub Pages, custom domain `pitboard.site` (registered on Namecheap)
- `public/CNAME` holds the custom domain so GitHub Pages serves it correctly
- Deploy workflow: `.github/workflows/deploy.yml` builds and publishes `dist/` on push to `main`
