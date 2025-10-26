export type Tier = {
  name: string;
  tagline: string;
  bullets: string[];
};

export const tiers: Tier[] = [
  {
    name: "Free",
    tagline: "Capture & auto-link â€” your private base layer.",
    bullets: [
      "Markdown notes and voice capture",
      "Auto-links back to existing thoughts",
      "Private sync with offline mode",
      "Foundational pattern view (time, place, mood)",
    ],
  },
  {
    name: "Premium",
    tagline: "More context, more range â€” grow deeper into the graph.",
    bullets: [
      "Expanded pattern and timeline views",
      "Custom tags and entities (people, projects, places)",
      "Advanced auto-link rules",
      "Priority sync and experimental drops",
    ],
  },
  {
    name: "Team (coming soon)",
    tagline: "Resonance for tight crews â€” the collective graph.",
    bullets: [
      "Shared boards with real-time linking",
      "Roles and visibility controls",
      "Geo and time layers across teammates",
      "Early integrations (API keys, webhooks)",
    ],
  },
];

