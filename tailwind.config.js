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
        'kantumury' : ['Kantumruy Pro', 'sans-serif'],
        'PTsans' : ['PT Sans Narrow', 'sans-serif']
      },
      maxWidth: {
        'myWidth': '82rem'
      },
      backgroundImage: {
        'homeBg' : 'url("./assets/image-about.jpeg")',
        'contactBg' : 'url("./assets/contact-image.jpeg")',
        'quoteBg' : 'url("./assets/quote-image.jpeg")'
      }
    },
  },
  plugins: [],
}

