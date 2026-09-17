/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pine: "#1F4A43",
        "pine-deep": "#153732",
        gold: "#C68A2E",
        paper: "#F3F0E6",
        ink: "#221F1B",
      },
    },
  },
  plugins: [],
};