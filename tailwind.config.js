/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["TradeGothicLTStd-Extended", "Montserrat", "sans-serif"],
        secondaryBold: [
          "Trade Gothic LT Bold Extended",
          "Montserrat",
          "sans-serif",
        ],
      },
      colors: {
        primary: "var(--clr-primary)",
        primaryDark: "var(--clr-primary--dark)",
        primaryLight: "var(--clr-primary--light)",
      },
    },
  },
  plugins: [],
};
