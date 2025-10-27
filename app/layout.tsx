import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "./providers/MotionProvider";
import FaviconWatcher from "@/app/components/FaviconWatcher";

export const metadata: Metadata = {
  metadataBase: new URL("https://noion-frontend.vercel.app"),
  title: "noion",
  description: "Capture → Connect → Decide. Your thoughts, linked.",
  openGraph: {
    type: "website",
    url: "https://noion-frontend.vercel.app",
    siteName: "noion",
    title: "Noion — Your thoughts, linked.",
    description: "Capture → Connect → Decide. Your thoughts, linked.",
    images: [
      {
        url: "/og/noion_og.png",
        width: 1200,
        height: 630,
        alt: "Noion — Your thoughts, linked.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noion — Your thoughts, linked.",
    description: "Capture → Connect → Decide. Your thoughts, linked.",
    images: ["/og/noion_og.png"],
  },
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

