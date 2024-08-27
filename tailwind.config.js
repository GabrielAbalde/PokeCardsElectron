/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        "rojo-nav": "#cd5241",
        "rojo-active": "#833118",
        "rojo-hover": "#e64110", 
        "azul-hero": "#084152"
      },
    },
  },
  plugins: [],
}

