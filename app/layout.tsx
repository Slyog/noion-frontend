import "@/styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "./providers/MotionProvider";

export const metadata: Metadata = {
  title: "Noion - Your thoughts, linked",
  description: "A living map of your thoughts. Auto-links, mood/place/time layers, and a clean path to your next move.",
  metadataBase: new URL("https://noion.cloud"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Noion - Your thoughts, linked",
    description: "Capture → Connect → Decide. See patterns across mood, place, and time.",
    url: "https://noion.cloud",
    siteName: "Noion",
    type: "website",
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/noion_favicon_180.png",
    other: [
      { rel: "mask-icon", url: "/favicons/noion_mark_512_transparent.png" },
      { rel: "icon", url: "/favicons/noion_favicon_512.png", type: "image/png" },
    ],
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-night text-ivory">
      <body className="antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
