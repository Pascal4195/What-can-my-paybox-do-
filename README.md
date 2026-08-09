# What Can My Pay box Agent Do?

An unofficial, community-made visual guide to what AI agents can currently do
with [PayBox by MoonPay](https://paybox.sh). Static site, no backend, no
accounts, no wallet/payment functionality — informational only.

## Stack

React + TypeScript + Vite + Tailwind CSS v4 + lucide-react icons.

## Deploying from your phone (GitHub web UI + Vercel free tier)

You don't need a terminal for any of this.

**1. Create the GitHub repo**
- On github.com, tap **+ -> New repository**.
- Name it (e.g. `what-can-my-agent-do`), Public or Private both work on
  Vercel's free tier.
- Don't initialize with a README (you already have one here).

**2. Upload the project files**
- Open the new repo -> **Add file -> Upload files**.
- From your file manager, open the unzipped project folder and select
  **all files and folders** (`src`, `public`, `index.html`, `package.json`,
  `package-lock.json`, `tsconfig*.json`, `vite.config.ts`, `.gitignore`,
  etc.) and upload them together — most Android file pickers let you
  multi-select everything in a folder at once.
- **Do not upload `node_modules` or `dist`** — not included in this zip,
  and Vercel builds those itself.
- Commit directly to `main`.

**3. Import into Vercel**
- On vercel.com, sign in (GitHub login is easiest), tap **Add New -> Project**.
- Select the repo you just created.
- Vercel auto-detects Vite — leave the defaults:
  - Build command: `npm run build`
  - Output directory: `dist`
- Tap **Deploy**. First build takes about a minute.

Any future push to `main` (even a one-line edit via GitHub's web editor)
triggers an automatic redeploy — no CLI needed.

## Updating capability data later

All the copy lives in one place: `src/data/capabilities.ts`. Edit it
directly in GitHub's web editor (pencil icon on the file) — no need to
touch component code to add, remove, or correct a capability.

## Accuracy

Capabilities are paraphrased from PayBox's own public materials (paybox.sh
and press coverage of its July 2026 launch), not invented. Anything
uncertain is hedged in the data file's `note` field. If PayBox changes what
it supports, this site will drift out of date until someone updates
`capabilities.ts` — expected for an unofficial guide.
