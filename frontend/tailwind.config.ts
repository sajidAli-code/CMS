/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      colors: {
        mainTextColor: "#131123",
        mainGrayBg: "#F5F7F9",
        mainWhiteText: "#FFFFFF",
        mainBlack: "#000000",
        mainBorders: "#E7EAE9",
        dustWhite: "#FCF9FF"
      },
      fontFamily: {
        gilroy: ['Gilroy'],
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
