/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F0",
        champagne: "#F5E8C7",
        emerald: "#006C5B",
        gold: "#CFA15D",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        arabic: ["'Scheherazade'", "serif"],
      },
      boxShadow: {
        "envelope": "0 8px 20px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
