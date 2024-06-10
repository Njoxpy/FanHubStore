/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors
      colors:{
        "blue": "#0033A0",
        "yellow": "#FFA500",
        "gray": "#F5F5F5",
      }
    },
  },
  plugins: [],
}