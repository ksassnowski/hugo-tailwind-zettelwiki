const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["layouts/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
  plugins: [],
};
