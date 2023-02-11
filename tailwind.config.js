/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
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
      boxShadow: {
        custom: "0 50px 25px -24px rgb(0 0 0 / 0.3)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      animation: {
        rigthArrow: "rigthArrow 2s infinite;",
        scrollRigth: "scrollRigth 50s linear infinite",
        scrollLeft: "scrollLeft 50s linear infinite;",
      },
      keyframes: {
        rigthArrow: {
          "0%": {transform: "translateX(0px)"},
          "100%": {transform: "translateX(0px)"},
          "50%": {transform: "translateX(10px)"},
        },
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
})
