/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", ".src/**/*.js"],
  theme: {
    extend: {fontFamily: {
        outfit: ['Outfit', "font-oufit"], // Add the Outfit font
      }
    },
  },
  plugins: [],
}

