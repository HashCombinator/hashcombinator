// tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#0B0C10', // richer black-blue
        primary: '#38BDF8', // Sky Blue
        accent: '#F97316', // Orange
        trust: '#14B8A6',  // Teal for credibility
        innovation: '#6366F1', // Indigo for tech-forward
        potential: '#FACC15'  // Yellow for optimism
      }
    }
  },
  plugins: []
};