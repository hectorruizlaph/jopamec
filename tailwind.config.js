/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: "#fcfcfc",
      gold: "#C89210",
      darkBlue: "#141B39",
      lightBlue: "#4D6373",
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      animation: {
        scrollRigth: "scrollRigth 50s linear infinite",
        scrollLeft: "scrollLeft 50s linear infinite;",
      },
      keyframes: {
        scrollRigth: {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(calc(-250px * 14))"},
        },
        scrollLeft: {
          "100%": {transform: "translateX(100)"},
          "0%": {transform: "translateX(calc(-250px * 14))"},
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
}
