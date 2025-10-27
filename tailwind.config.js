/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores Velez agrupados
        velez: {
          blue: {
            50:  "#f4f8fb",
            100: "#e8f1fb",
            200: "#cfe0f6",
            300: "#9fc1ea",
            400: "#5e89c8",
            DEFAULT: "#3567a5", // color principal (sin cambios)
            600: "#2f5f90",
            700: "#2a4f81",     // versión más oscura (hover)
            800: "#20365a",
            900: "#18304f",     // versión aún más oscura
          },
          gold: "#edaf66",
          white: "#fefefe",
        },

        // Colores existentes que querías mantener
        primary: {
          50:  '#f5f9ff',
          100: '#e6f0ff',
          200: '#bfe0ff',
          300: '#99d1ff',
          400: '#4dafff',
          500: '#0077ff',
          600: '#0066e6',
          700: '#004fb3',
          800: '#003980',
          900: '#00264d',
        },
        accent: '#ff6b6b',
        'brand-green': {
          DEFAULT: '#22c55e',
          700: '#16a34a'
        }
      },
    },
  },
  plugins: [],
}

