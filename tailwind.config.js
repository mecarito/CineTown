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
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
    },
  },
  plugins: [],
};
