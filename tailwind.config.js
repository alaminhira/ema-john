/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#679316",

        "secondary": "#92a7dd",

        "accent": "#90ea8f",

        "neutral": "#3C293D",

        "base-100": "#FCFCFD",

        "info": "#267CDF",

        "success": "#31E375",

        "warning": "#BC9C10",

        "error": "#F5326D",
      },
    }, ],
  },
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
  plugins: [require("daisyui")],
}