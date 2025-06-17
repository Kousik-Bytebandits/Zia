/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        archivo: ['"Archivo Narrow"', 'sans-serif'],
         tenor: ['Tenor Sans', 'sans-serif'], 
          sans: ['DM Sans', 'sans-serif'],
      },
        keyframes: {
    'scroll-left': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
    'scroll-right': {
      '0%': { transform: 'translateX(-50%)' },
      '100%': { transform: 'translateX(0)' },
    },
  },
  animation: {
    'scroll-left': 'scroll-left 20s linear infinite',
    'scroll-right': 'scroll-right 15s linear infinite',
  },
    },
  },
  plugins: [],
};
