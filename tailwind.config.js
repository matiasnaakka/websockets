/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      primaryy: "#2C312B",
      secondary: "#19201A",
      third: "#050804",
      fourth: "#9E8772",
      fifthi: "#424239",
      white: "#FFFFFF",
      greenys: "#66D785",
    },
  },
  plugins: [require("flowbite/plugin")],
};
