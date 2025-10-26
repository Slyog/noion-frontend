# Noion — Your thoughts, linked

**Noion** ist eine minimalistische, schnelle Landingpage für das kommende **Relation Network**:  
Ein lebender Wissensgraph, der Gedanken (Text oder Voice) verknüpft — nach Thema, Ort, Zeit und Stimmung.

- Website: (bald) `app.noion.cloud`
- Tech-Stack: **Next.js (App Router)** · **Tailwind** · **ScrollXUI** · **Framer Motion**
- Claim: **Your thoughts, linked**
- Kurzbeschreibung: **The Relation Network.**

---

## ✨ Features (Frontend)

- **Hero / Value Proposition** im Noion-Branding (dark, gelb-grau, techno-clean)
- **Living Graph**-Sektion (Produkt-Narrativ)
- **Core Features** + **Feature-Matrix (Free vs. Premium)**
- **How it works** (Capture – Connect – Decide)  
  _Capture unterstützt Schreiben **oder Sprechen** → erzeugt Metadaten_
- **Roadmap 2025** (MVP → Collective Graph → Integrationen)
- **CTA: Waitlist** (funktionale API, speichert Einträge lokal)

---

## 🧩 Projektstruktur

app/
├─ api/
│ └─ waitlist/
│ └─ route.ts # POST /api/waitlist → data/waitlist.csv
├─ components/ # Navbar, Hero, LivingGraph, Features, Matrix, Roadmap, CTA, Footer
├─ providers/
│ └─ MotionProvider.tsx
├─ layout.tsx # Metadata + Favicons + Manifest
└─ page.tsx # Landingpage-Komposition
public/
└─ favicons/ # favicon.ico + PNGs + site.webmanifest
data/
└─ waitlist.csv # lokale Speicherung (CSV)
styles/
└─ globals.css

---

## 🚀 Lokale Entwicklung

```bash
# Dependencies
npm install

# Dev-Server starten
npm run dev

# Production-Build
npm run build
npm run start
```

Standard-Port: http://localhost:3000

📮 Waitlist API (lokal)

Die Landingpage hat eine kleine, serverseitige Route:

POST /api/waitlist → { email }

Speichert Einträge in data/waitlist.csv (Header: email,timestamp)

Formular befindet sich in app/components/CTA.tsx.
Ziel: schneller Proof-of-Concept ohne externe Abhängigkeiten.

🖼️ Favicons & Manifest

Alle Assets liegen in /public/favicons.

favicon.ico

noion_favicon_180.png (Apple)

noion_favicon_512.png

noion_mark_512_transparent.png (maskable)

app/layout.tsx enthält:

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
