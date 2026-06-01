/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bims: {
          green: '#8bc53f', // Approximate from logo
          darkGreen: '#4cae4c',
          blue: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}