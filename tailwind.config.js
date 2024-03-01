/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        bgGrey: "#0F0F0F",
        bgWhite: "#D9D9D9",
        bgBlue: "#2B8BFC",
        buttonGr: "#B4FF78",
      },
      height: {
        border: "calc(34% - 6px)"
      },
      fontFamily: {
        digital: ["Digital Numbers", "sans-serif"],
      },
      dropShadow: {
        circle: "0px 0px 15px #FFF",
      },
      backgroundImage: {
        buttonW: "linear-gradient(180deg, #FFF 0%, rgba(0, 0, 0, 0.80) 27.5%, rgba(0, 0, 0, 0.60) 76.5%, #FFF 100%)",
        buttonG: "linear-gradient(180deg, #B4FF78 0%, rgba(0, 0, 0, 0.80) 27.5%, rgba(0, 0, 0, 0.60) 76.5%, #B4FF78 100%)"
      },
      boxShadow: {
        buttonW: "0px 0px 10px 0px #FFF",
        buttonG: "0px 0px 10px 0px #B4FF78",
      },
      transitionTimingFunction: {
        "grid": "cubic-bezier(.49,1.54,.6,.87)"
      }
    }
  },
  plugins: [],
}
