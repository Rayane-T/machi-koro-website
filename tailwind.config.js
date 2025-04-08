/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'machi-primary': '#FFB38A', // Pastel orange
        'machi-secondary': '#FFD0A8', // Light pastel orange
        'machi-accent': '#FFE5B4', // Pastel golden yellow
        'machi-background': '#FFF5EE', // Cream
        'machi-text': '#2F4F4F', // Dark gray
      },
      fontFamily: {
        'japanese': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 