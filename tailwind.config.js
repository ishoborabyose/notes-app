/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        boxi: "0 0 0 2px, inset -2px 0 0, inset 2px 0 0",
      },
    },
  },
  plugins: [],
};
