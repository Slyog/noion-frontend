## Noion — Your thoughts, linked

Noion is a minimal, fast landing page for the upcoming Relation Network:
a living knowledge graph that links thoughts (text or voice) by topic, place, time, and mood.

Website: coming soon at noion.cloud

Tech stack: Next.js (App Router) · Tailwind · ScrollXUI · Framer Motion

Claim: Your thoughts, linked

Short tagline: The Relation Network.

##  Features (Frontend)

Hero / Value Proposition in Noion branding (dark, gold–gray, techno-clean)

Living Graph section (product narrative)

Core Features + Feature Matrix (Free vs. Premium)

How it works (Capture – Connect – Decide)
Capture supports typing or speaking → generates metadata

Roadmap 2025 (MVP → Collective Graph → Integrations)

CTA: Waitlist (working API, stores entries locally)

##  Project Structure
```bash
app/
├─ api/
│  └─ waitlist/
│     └─ route.ts       # POST /api/waitlist → data/waitlist.csv
├─ components/          # Navbar, Hero, LivingGraph, Features, Matrix, Roadmap, CTA, Footer
├─ providers/
│  └─ MotionProvider.tsx
├─ layout.tsx           # Metadata + Favicons + Manifest
└─ page.tsx             # Landing composition
public/
└─ favicons/            # favicon.ico + PNGs + site.webmanifest
data/
└─ waitlist.csv         # local CSV storage
styles/
└─ globals.css
```

## Local Development
```bash
# Install deps
npm install

# Start dev server
npm run dev

# Production build
npm run build
npm run start
```
## Waitlist API (local)

The landing page exposes a tiny server route:

POST /api/waitlist → { email }

Stores entries in data/waitlist.csv (columns: email,timestamp)

The form lives in app/components/CTA.tsx.
Goal: quick proof of concept with zero external dependencies.

## Favicons & Manifest

All assets live in /public/favicons.

favicon.ico

noion_favicon_180.png (Apple)

noion_favicon_512.png

noion_mark_512_transparent.png (maskable)

app/layout.tsx includes:

```ts
export const metadata = {
  title: "Noion - Your thoughts, linked",
  description: "The Relation Network.",
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/noion_favicon_180.png",
    other: [
      { rel: "mask-icon", url: "/favicons/noion_mark_512_transparent.png" },
      {
        rel: "icon",
        url: "/favicons/noion_favicon_512.png",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
};
```
