const colors = require('tailwindcss/colors');

module.exports = {
   mode: 'jit',
  purge: ['layouts/**/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      teal: colors.teal
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
