module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00D4FF", // Electric Cyan - Energie & Cloud
        accent: "#FFD700", // Solar Gold - Wärme & Nachhaltigkeit
        base: "#0F0F17", // Dark Base - Techno / Club Hintergrund
        surface: "#1E1E2E", // Panel / Card Hintergrund
        text: "#E5E7EB", // Weißgrau - klare Lesbarkeit
        muted: "#9CA3AF", // sekundärer Text
        donate: "#10B981", // Grün für Spendenbutton (Vertrauen, Positivität)
        night: "#05050F",
        night2: "#121226",
        gold: "#FFD700",
        ivory: "#F4F4F0",
      },
    },
  },
  plugins: [],
};
