module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkred: {
          50: "#00B5E2",
          100: "#0EA0C5",
          200: "#C83637",
          300: "#EE4054",
          400: "#EE4552",
        },
        mygray: {
          50: "#F5F5F5",
          100: "#F5F5F5",
          200: "#F3F6FA",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
