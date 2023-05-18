/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        utama: ["Chicle"],
      },
      backgroundImage: {
        taman: "url('./src/img/taman.png')",
      },
    },
  },
  plugins: [],
};
