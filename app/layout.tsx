import "@/styles/globals.css";
import type { ReactNode } from "react";
import { MotionProvider } from "./providers/MotionProvider";

export const metadata = {
  title: "Noion - Your thoughts, linked",
  description: "The Relation Network.",
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
