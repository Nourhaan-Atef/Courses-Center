/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: "hsl(52, 100%, 62%)",
        darkModerateCyan: "hsl(185, 42%, 37%)",
        darkCyan: "hsl(185, 58%, 25%)",
        lightPink: "#F48484",
        darkPink: "#F55050",
        veryDarkPink: "#B73E3E",
        lightGray: "hsl(35, 11%, 61%)",
        darkGray: " hsl(60, 10%, 19%)",
      },
      fontFamily: {
        logoFont: "Pacifico",
        pageFont: "Shrikhand",
      },
    },
  },
  plugins: [],
};
