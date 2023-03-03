/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "3xl": "1580px",
    },
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
        ubuntu: ["Ubuntu", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        rigthArrow: "rigthArrow 2s infinite;",
        openmenu: "openmenu 0.5s ease-in",
        closemenu: "closemenu 0.5s ease-in",
      },
      keyframes: {
        rigthArrow: {
          "0%": {transform: "translateX(0px)"},
          "100%": {transform: "translateX(0px)"},
          "50%": {transform: "translateX(10px)"},
        },
        openmenu: {
          // initial position
          "0%": {left: "100%"},
          // final position
          "100%": {left: "0px"},
        },
        closemenu: {
          // initial position
          "0%": {left: "0px"},
          // final position
          "100%": {left: "100%"},
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({nocompatible: true})],
})
