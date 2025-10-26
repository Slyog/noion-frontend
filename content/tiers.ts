// content/tiers.ts
export type Tier = {
  name: string;
  tagline: string;
  bullets: string[];
};

export const tiers: Tier[] = [
  {
    name: "Free",
    tagline: "Capture & auto-link — dein privates Grundgerüst.",
    bullets: [
      "Markdown-Notizen und Voice Capture",
      "Auto-Links zu bestehenden Gedanken",
      "Private Sync, Offline-fähig",
      "Basale Pattern-Ansicht (Zeit, Ort, Stimmung)",
    ],
  },
  {
    name: "Premium",
    tagline: "Mehr Kontext, mehr Weitblick — wachse in den Graph hinein.",
    bullets: [
      "Erweiterte Pattern- & Timeline-Views",
      "Custom Tags & Entities (People, Projects, Places)",
      "Erweiterte Auto-Link-Regeln",
      "Priority-Sync & experimentelle Features",
    ],
  },
  {
    name: "Team (coming soon)",
    tagline: "Resonanz in kleinen Crews — der kollektive Graph.",
    bullets: [
      "Geteilte Boards & Echtzeit-Links",
      "Rollen & Sichtbarkeiten",
      "Geo- & Zeitlayer über mehrere Personen",
      "Frühe Integrationen (API Keys, Webhooks)",
    ],
  },
];
