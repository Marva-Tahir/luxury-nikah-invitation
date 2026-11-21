/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          DEFAULT: "#FDFBF7",
          light: "#FFFFFF",
          warm: "#FBF7F0",
          cream: "#F7F2E7",
        },
        rose: {
          blush: "#FAF0F2",
          soft: "#F5E1E4",
          petal: "#ECC8CF",
          dusty: "#C98A98",
          deep: "#8F4E5D",
        },
        gold: {
          light: "#FDF1D6",
          champagne: "#F4E3BF",
          DEFAULT: "#C5A059",
          rich: "#DFB76C",
          dark: "#967431",
          antique: "#7C5D23",
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
        envelope: "0 20px 60px -10px rgba(120, 80, 90, 0.18), 0 0 35px rgba(197, 160, 89, 0.2)",
        bow: "0 8px 24px rgba(143, 78, 93, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.6)",
        card: "0 25px 50px -12px rgba(90, 50, 60, 0.15), 0 0 25px rgba(223, 183, 108, 0.2)",
      },
    },
  },
  plugins: [],
};
