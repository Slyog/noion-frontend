import { scrollxuiTheme } from "scrollxui/theme";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/scrollxui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...scrollxuiTheme.colors,
        background: "#0b0b0c",
        surface: "#131315",
        primary: {
          DEFAULT: "#facc15",
          hover: "#fde047",
        },
        accent: {
          DEFAULT: "#ffdd66",
          dim: "#bfae4a",
        },
        text: {
          DEFAULT: "#f4f4f5",
          subtle: "#a1a1aa",
        },
        border: "#27272a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(250,204,21,0.15)",
      },
    },
  },
  plugins: [require("scrollxui/plugin")],
};
