/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { // Lägg till din handskrift font här
        Platform: ["Platform", "sans-serif"],
        handWritten: ["The Girl Next Door", "cursive"],
        comicNeue: ["ComicNeue"], 
      },
      fontSize: {
        "title-xl": [
          "5.625rem",
          { lineHeight: "6.563rem", fontWeight: "bold" },
        ],
        "title-xl-mobile": [
          "3.125rem",
          { lineHeight: "3.75rem", fontWeight: "bold" },
        ],
        "title-lg": [
          "4.375rem",
          { lineHeight: "4.063rem", fontWeight: "bold" },
        ],
        "title-lg-mobile": [
          "2.5rem",
          { lineHeight: "3.125rem", fontWeight: "bold" },
        ],
        "title-md": [
          "3.438rem",
          { lineHeight: "3.125rem", fontWeight: "bold" },
        ],
        "title-md-mobile": [
          "2.5rem",
          { lineHeight: "3.125rem", fontWeight: "bold" },
        ],
        "title-sm": [
          "2.188rem",
          { lineHeight: "2.813rem", fontWeight: "bold" },
        ],
        "title-xs": ["1.25rem", { lineHeight: "1.875rem", fontWeight: "bold" }],
        headline: ["3.75rem", { lineHeight: "2.5rem" }],
        "headline-mobile": ["2.5rem", { lineHeight: "2.5rem" }],
        "body-lg": ["1.5rem", { lineHeight: "2.188rem" }],
        "body-lg-mobile": ["1.25rem", { lineHeight: "1.875rem" }],
        "body-md": ["1.25rem", { lineHeight: "1.875rem" }],
        "body-sm": ["1rem", { lineHeight: "1.563rem" }],
        "body-xs": ["0.875rem", { lineHeight: "1.25rem" }],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        xl: '1rem',
      },
      screens: {
        DEFAULT: '100%',
        sm: '100%',
        md: '100%',
        lg: '1440px',
      },
    },
  },
  plugins: [],
};
