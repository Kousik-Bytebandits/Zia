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
    },
  },
  plugins: [],
};
