/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF7F0",
          light: "#FDFBF7",
          dark: "#EFE8D8",
          warm: "#F5EFEB",
        },
        champagne: {
          DEFAULT: "#F5E8C7",
          light: "#FAF0D7",
          dark: "#E4D1A3",
        },
        emerald: {
          DEFAULT: "#064E3B",
          dark: "#08291F",
          deep: "#041C15",
          rich: "#0A3D2E",
          light: "#0F766E",
        },
        gold: {
          light: "#F5E5C9",
          DEFAULT: "#C5A059",
          dark: "#8F6E2B",
          antique: "#7C5D23",
          shimmer: "#DFB76C",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        cinzel: ["'Cinzel'", "serif"],
        script: ["'Great Vibes'", "cursive"],
        arabic: ["'Amiri'", "'Scheherazade New'", "serif"],
        sans: ["'Montserrat'", "sans-serif"],
      },
      boxShadow: {
        envelope: "0 25px 60px -15px rgba(4, 28, 21, 0.4), 0 0 40px rgba(197, 160, 89, 0.15)",
        seal: "0 6px 16px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4), inset 0 -3px 6px rgba(0, 0, 0, 0.5)",
        card: "0 20px 50px rgba(4, 28, 21, 0.25), 0 0 30px rgba(197, 160, 89, 0.12)",
        goldGlow: "0 0 25px rgba(223, 183, 108, 0.45)",
      },
      backgroundImage: {
        'gold-metallic': 'linear-gradient(135deg, #F5E5C9 0%, #C5A059 50%, #8F6E2B 100%)',
        'gold-sheen': 'linear-gradient(90deg, #F5E5C9 0%, #DFB76C 25%, #C5A059 50%, #DFB76C 75%, #F5E5C9 100%)',
        'emerald-silk': 'radial-gradient(circle at 50% 20%, #0F5E46 0%, #08291F 70%, #041C15 100%)',
      },
    },
  },
  plugins: [],
};
