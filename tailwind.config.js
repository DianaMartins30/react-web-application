/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'my-purple': '#7121D7',
        'my-dark-purple': '#2E1055'
      }
    },
  },
  plugins: [],
  safelist: [{
    pattern: /.*/
  }],
}
