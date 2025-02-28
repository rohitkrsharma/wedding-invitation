/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
        chivo: ['Chivo', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        weds: ["Sixtyfour Convergence", "serif"],
        wedding: ["Agu Display", "serif"],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
