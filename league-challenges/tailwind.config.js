/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica','Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        coral: '#4f5d75',
        pine: '#519E8A',
        sand: '#ee964b',
        'space': {
          DEFAULT: '#2D3142',
          100: '#424861',
          200: '#212331'
        }
      },
      maxWidth: {
        70: '70%',
        85: '85%',
        90: '90%'
      },
    },
  },
};
