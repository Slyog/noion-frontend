// content/featureMatrix.ts
export const featureMatrix = {
  title: "Compare how each layer grows",
  subline:
    "Each tier expands how your graph links, syncs, and collaborates. Start light, grow deep.",
  rows: [
    {
      feature: "Auto-linking thoughts",
      free: "Basic keyword linking",
      premium: "Semantic + emotional context",
    },
    {
      feature: "Voice Capture",
      free: "Yes",
      premium: "Yes + transcript tagging",
    },
    {
      feature: "Private Sync",
      free: "Device only",
      premium: "Encrypted Cloud",
    },
    {
      feature: "Pattern View",
      free: "Timeline only",
      premium: "Timeline + Mood + Location",
    },
    {
      feature: "Integrations",
      free: "—",
      premium: "API Keys & Webhooks",
    },
  ],
} as const;
