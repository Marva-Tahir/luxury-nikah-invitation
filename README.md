# Luxury Interactive Digital Nikah Invitation

A premium, mobile‑first, cinematic invitation built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Project Structure
```
luxury-nikah-invitation/
├─ public/
│   └─ index.html
├─ src/
│   ├─ assets/               # placeholder music, textures, etc.
│   ├─ config/                # editable invitation data
│   │   └─ invitation.ts
│   ├─ components/            # React + Motion UI components
│   │   ├─ EnvelopeOpening.tsx
│   │   ├─ WaxSeal.tsx
│   │   ├─ RibbonAnimation.tsx
│   │   ├─ BismillahScene.tsx
│   │   ├─ QuoteScene.tsx
│   │   ├─ NikahInvitation.tsx
│   │   ├─ CountdownTimer.tsx
│   │   ├─ LocationSection.tsx
│   │   └─ MusicController.tsx
│   ├─ App.tsx                # scene orchestrator
│   ├─ main.tsx               # React entry point
│   └─ index.css              # Tailwind imports & global styles
├─ tailwind.config.cjs
├─ postcss.config.cjs
├─ vite.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md                 # (this file)
```

## How to Run Locally
```bash
# 1. Install dependencies
npm install

# 2. Start development server (opens automatically)
npm run dev
```
The site will be available at `http://localhost:5173` – test on mobile viewports.

## Deploy to Vercel (or any static host)
1. Push this folder to a Git repository (GitHub, GitLab, etc.).
2. Connect the repo to Vercel and select the **`npm run build`** command.
3. Vercel will install dependencies, run `vite build`, and serve the `dist/` folder.
4. The site works completely client‑side – no server code required.

## Customisation
- Edit **`src/config/invitation.ts`** to change bride/groom names, date, venue, map link, and music file.
- Replace `src/assets/placeholder-music.mp3` with your final track (keep the same name or update `musicSrc` in the config).
- You can swap the placeholder textures or SVGs with your own high‑quality assets.
- Tailwind colors/foundry can be tweaked in `tailwind.config.cjs`.

## Accessibility
- Reduced‑motion media query disables heavy animations (Framer Motion respects `prefers-reduced-motion`).
- All interactive elements are keyboard‑focusable and have sufficient tap targets.

Enjoy the elegant invitation experience!   
