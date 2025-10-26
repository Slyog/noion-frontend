import { defineScrollxUITheme } from "scrollxui/theme";

export default defineScrollxUITheme({
  darkMode: true,
  colors: {
    primary: "#facc15",
    primaryHover: "#fde047",
    background: "#0b0b0c",
    surface: "#131315",
    text: "#f4f4f5",
    textMuted: "#a1a1aa",
    border: "#27272a",
    accent: "#ffdd66",
    accentDim: "#bfae4a",
    danger: "#ef4444",
    success: "#22c55e",
    warning: "#eab308",
  },
  radii: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  shadows: {
    glow: "0 0 20px rgba(250,204,21,0.15)",
    card: "0 2px 6px rgba(0,0,0,0.2)",
  },
  typography: {
    fontFamily: {
      heading: "'Inter', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
  },
});
