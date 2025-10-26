import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "./providers/MotionProvider";
import FaviconWatcher from "@/app/components/FaviconWatcher";

export const metadata: Metadata = {
  title: "noion - your thoughts, linked",
  description:
    "A living map of your thoughts. Auto-links, mood/place/time layers, and a clean path to your next move.",
  metadataBase: new URL("https://noion.cloud"),
  alternates: { canonical: "https://noion.cloud/" },
  openGraph: {
    title: "noion - your thoughts, linked",
    description: "Capture > Connect > Decide. See patterns across mood, place, and time.",
    url: "https://noion.cloud",
    siteName: "noion",
    type: "website",
    images: [
      {
        url: "https://noion.cloud/visuals/meaning-over-text.png",
        width: 1200,
        height: 630,
        alt: "noion graph preview",
      },
    ],
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

export const viewport: Viewport = {
  themeColor: "#0e0e0f",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-night text-ivory">
      <head>
        <link rel="preload" as="image" href="/favicons/noion_favicon_64.png" />
        <link rel="preload" as="font" href="/fonts/Inter-Regular.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Inter-SemiBold.woff2" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <MotionProvider>{children}</MotionProvider>
        <FaviconWatcher />
      </body>
    </html>
  );
}

