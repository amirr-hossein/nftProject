/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0A0F29",
      },
      fontFamily: {
        "inter-bold": "inter-bold",
      },
    },
  },
  plugins: [],
};
