import "@/styles/globals.css";
import type { ReactNode } from "react";
import { MotionProvider } from "./providers/MotionProvider";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-night text-ivory">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
