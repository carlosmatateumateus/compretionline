/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        transparent: "rgba(0, 0, 0, 0)"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      screens: {
        'card-perfect-preview':'1050px'
      },
    },
  },
  plugins: [],
}