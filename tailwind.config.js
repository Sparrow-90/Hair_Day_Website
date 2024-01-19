/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        accentColor: '#D0604C'
      },
      fontFamily: {
        'kantumury' : ['Kantumruy Pro', 'sans-serif']
      },
      maxWidth: {
        'myWidth': '82rem'
      },
      backgroundImage: {
        'homeBg' : 'url("./assets/pic1.png")'
      }
    },
  },
  plugins: [],
}

