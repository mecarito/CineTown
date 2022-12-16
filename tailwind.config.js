/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "theme-black": "#0D0D0F",
        "theme-red": "#EB1C24",
        "theme-purple": "#1A171E",
        "theme-light-blue": "#E3E7EB",
        "theme-yellow": "#FFC728",
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
      screens: {
        lg: "1280px",
        lgxl: "1366px",
        lgxxl: "1920px",
      },
      spacing: {
        "movie-c-h": "21.25rem",
        "movie-c-w": "11.875rem",
        "mobile-movie-c-w": "8.75rem",
        "movie-i-h": "17.5rem",
      },
    },
  },
  plugins: [],
};
