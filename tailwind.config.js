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
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        title: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(25px, -25px)' },
        },
        'drift': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(15px, 10px)' },
          '50%': { transform: 'translate(5px, 20px)' },
          '75%': { transform: 'translate(-10px, 15px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        pulse: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.3)' },
        },
        dash: {
          'to': { strokeDashoffset: '1000' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        dash: 'dash 25s linear infinite',
      },
    },
  },
  plugins: [],
}
