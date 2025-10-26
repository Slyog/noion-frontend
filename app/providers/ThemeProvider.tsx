"use client";

import { ScrollxUIProvider } from "scrollxui";
import theme from "../scrollxui.config";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollxUIProvider theme={theme}>
      <div className="bg-background text-text min-h-screen">{children}</div>
    </ScrollxUIProvider>
  );
}
