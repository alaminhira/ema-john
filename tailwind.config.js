/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1C2B35',
        lightOrange: '#FF9900',
        lightYellow: '#FFE0B3',
        bloodRed: '#FF3030',
        
      },

      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
