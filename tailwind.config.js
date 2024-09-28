/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ]
      },
      backgroundColor: {
        primary: '#201f31',
        secondary: '#6c757d',
        thirt: '#343a40',
        pink: '#ffbade',
      },
      colors: {
        primary: '#fff',
        pink: '#ffbade',
        darkgray: '343a40'
      },
      screens: {
        'sm': '530px',
        'md': '637px',
        'lg': '840px',
        'xl': '950px'
      }
    },
  },
  plugins: [],
}

