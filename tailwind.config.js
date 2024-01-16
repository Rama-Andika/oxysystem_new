/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      display: ["Public Sans", "sans-serif"],
    },
    extend: {
      colors:{
        "primary": "#000080",
        "heading": "#4B465C",
        "body": "#4B465C80",
        "divider": "#DBDADE",
      },
      backgroundColor: {
        "main": "#F8F7FA",
        "main-dark": "#4B4B4B",
        "primary": "#000080",
        "hover-primary": "#00008090",
        "secondary": "#A8AAAE",
      },
    },
  },
  plugins: [],
};
