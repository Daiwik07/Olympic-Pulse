/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olympicBlue: '#0072CE',
        olympicBlack: '#000000',
        olympicGreen: '#00843D',
        olympicYellow: '#F4C300',
        olympicRed: '#EE334E',
      },
    },
  },
  plugins: [],
}