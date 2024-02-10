/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'clashGrotesk': ['Clash Grotesk Variable', 'sans-serif']
      },
      spacing: {
        '73': '73rem',
        '68': '68rem'
      }
    },
  },
  plugins: [],
}