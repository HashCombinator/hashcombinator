/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0F',
        neon: '#7FFF00',
        orange: '#FF7E1B'
      },
      fontFamily: {
        sans: ['InterVariable', 'sans-serif']
      }
    },
  },
  plugins: [],
};
