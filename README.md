## noion â€” Your thoughts, linked

noion is a minimal, fast landing page for the upcoming Relation Network:
a living knowledge graph that links thoughts (text or voice) by topic, place, time, and mood.

Website: coming soon at noion.cloud

Tech stack: Next.js (App Router) Â· Tailwind Â· ScrollXUI Â· Framer Motion

Claim: Your thoughts, linked

Short tagline: The Relation Network.

##  Features (Frontend)

Hero / Value Proposition in noion branding (dark, goldâ€“gray, techno-clean)

Living Graph section (product narrative)

Core Features + Feature Matrix (Free vs. Premium)

How it works (Capture â€“ Connect â€“ Decide)
Capture supports typing or speaking â†’ generates metadata

Roadmap 2025 (MVP â†’ Collective Graph â†’ Integrations)

CTA: Waitlist (working API, stores entries locally)

##  Project Structure
```bash
app/
â”œâ”€ api/
â”‚  â””â”€ waitlist/
â”‚     â””â”€ route.ts       # POST /api/waitlist â†’ data/waitlist.csv
â”œâ”€ components/          # Navbar, Hero, LivingGraph, Features, Matrix, Roadmap, CTA, Footer
â”œâ”€ providers/
â”‚  â””â”€ MotionProvider.tsx
â”œâ”€ layout.tsx           # Metadata + Favicons + Manifest
â””â”€ page.tsx             # Landing composition
public/
â””â”€ favicons/            # favicon.ico + PNGs + site.webmanifest
data/
â””â”€ waitlist.csv         # local CSV storage
styles/
â””â”€ globals.css
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

POST /api/waitlist â†’ { email }

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
  title: "noion - Your thoughts, linked",
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

