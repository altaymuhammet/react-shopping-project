/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      paddingSizes: {
        "p-200": "200px",
      },
      colors: {
        "black-custom": "#3d3d3d",
        "brand-color": "#27D798",
        "favColor" : "#FFF4D2",
        "signColor" : "#7209b7"
      },
    },
  },
  plugins: [],
};
