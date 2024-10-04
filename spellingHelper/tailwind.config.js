/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Platform: ['Platform', 'sans-serif'],
        'Reenie-Beanie': ['Reenie Beanie', 'cursive'],
        'Handwritten': ['The Girl Next Door', 'cursive'], // Lägg till din handskrift font här
      },
    },
  },
  plugins: [],
}

