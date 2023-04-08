/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/app/**/*.{js,ts,jsx,tsx}",
    "./apps/**/pages/**/*.{js,ts,jsx,tsx}",
    "./apps/**/components/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin'), require('@tailwindcss/forms')],
}

