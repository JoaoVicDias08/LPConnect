/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Base
        bg: "#0B0B0D",        // fundo principal
        surface: "#15161A",   // áreas internas / nav
        card: "#2F3438",      // blocos / cards
        border: "#6B7176",    // linhas sutis

        // Texto
        title: "#F5F7FA",     // títulos
        text: "#BFC7CD",      // texto normal
        muted: "#6B7176",     // texto secundário

        // Acentos
        accent: "#E24B2A",    // destaque principal
        accent2: "#C62828",   // destaque secundário
        highlight: "#FFB86B", // extra
      },
      backgroundImage: {
        "metal-grad": "linear-gradient(90deg,#2F3438 0%,#15161A 100%)",
      },
       fontFamily: {
        title: ["OswaldBold"],   // títulos
        body: ["InterRegular"],  // textos
      },
    },
  },
  plugins: [],
};
