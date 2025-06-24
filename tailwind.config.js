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
     wave: {
          "0%": { marginLeft: "0" },
          "100%": { marginLeft: "-1600px" },
        },
  },
  animation: {
    'scroll-left': 'scroll-left 20s linear infinite',
    'scroll-right': 'scroll-right 20s linear infinite',
  wave: "wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite",
  },
    },
  },
  plugins: [],
};
