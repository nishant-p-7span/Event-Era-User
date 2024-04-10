/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

console.log(defaultTheme);

export default withMT({
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    screens: {
      xxs: "380px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1600px",
    },
    // container: {
    //   center: true,
    //   padding: "1rem",
    //   screens: {
    //     xs: "540px",
    //     sm: "720px",
    //     md: "960px",
    //     lg: "1140px",
    //     xl: "1200px",
    //   },
    // },

    extend: {
      colors: {
        primary: {
          100: "#FEE9DD",
          200: "#FDCDBC",
          300: "#FAAB9A",
          400: "#F68A80",
          500: "#F15757",
          600: "#CF3F4C",
          700: "#AD2B42",
          800: "#8B1B38",
          900: "#731032",
        },
        secondary: {
          100: "#C7F9E4",
          200: "#92F3D2",
          300: "#58DDBC",
          400: "#2FBCA5",
          500: "#009086",
          600: "#00797B",
          700: "#00605F",
          800: "#004253",
          900: "#003145",
        },
        accent: {
          100: "#F6CCE3",
          200: "#ED9DD1",
          300: "#C963AE",
          400: "#933683",
          500: "#4C0C47",
          600: "#400841",
          700: "#380034",
          800: "#24032C",
          900: "#1A0224",
        },
        grey: {
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#525268",
          700: "#383857",
          800: "#242446",
          900: "#15153A",
        },
        success: {
          100: "#DCFCE7",
          200: "#A0F5A6",
          300: "#6DE381",
          400: "#46C769",
          500: "#16A34A",
          600: "#108C4A",
          700: "#0B7547",
          800: "#075E41",
          900: "#044E3C",
        },
        danger: {
          100: "#FDE1D3",
          200: "#FBBDA8",
          300: "#F4907B",
          400: "#EA6558",
          500: "#DC2626",
          600: "#BD1B29",
          700: "#9E132B",
          800: "#7F0C2A",
          900: "#690729",
        },
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
        body: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
});
