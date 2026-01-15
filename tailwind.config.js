/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        azul: '#4b66f7',
        'gris-oscuro': '#282a2b',
        'gris-claro': '#d1d1d1',
        blanco: '#eeefea',
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
