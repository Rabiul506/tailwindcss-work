/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Roboto:["Roboto, sans-serif"],
        sans: ['Bai Jamjuree', 'sans-serif'],
      },

      screens:{

        'sm': '430px',
        'md': '768px',
        'lg': '976px',
        'xl': '1440px'
      },

      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
    },
  },
  plugins: [],
}

