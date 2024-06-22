/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenblue': {
          '50': '#eafffe',
          '100': '#cbfffe',
          '200': '#9effff',
          '300': '#5bfcff',
          '400': '#00eeff',
          '500': '#00d1e5',
          '600': '#00a7c0',
          '700': '#03849b',
          '800': '#0d697d',
          '900': '#105769',
          '950': '#033a49',
        },       
      }
    },
  },
  plugins: [],
}

