const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        "custom-blue": {
            "100": "#26B4FF",
        },
        "custom-gray":{
         "100": "#CBCEDD",
         "200":"#9A9A9A",
         "300":"#A6A5B5",
         "400":"#424242",
         "500":"#2F3337", //header color
         "600":"#C4C4C4", //color profile circle
         "700":"#F3F3F3", //color de fondo logo de empresa
         "800":"#727171", //color de texto en vista de card 
         "900":"#A7A7A7", //linea en vista card
         "1000":"#525252" //color de texto en navegacion de company card inferior
        },
        "custom-red":{
          "100":"#FF0000" //numero 2 en header
        }
    },
}
 
 const fontSize ={
     'xs': '.563rem',
     'sm': '.875rem',
     'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
     '3xl': '1.875rem',
     '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
     '7xl': '5rem',
    }
 
const minwidth = {
  '0': '0',
  '1/4': '25%',
  '1/2': '50%',
  '3/4': '75%',
  'full': '100%',
  'customCard':'90%',
}
const minHeight = {
  '0': '0',
  '1/4': '25%',
  '1/2': '50%',
  '3/4': '75%',
  'custom': '85%',
  'full': '100%',
  'custom2':'150px'
 }

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: colors,
    minWidth: minwidth,
    minHeight:minHeight,
    fontSize:fontSize
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
