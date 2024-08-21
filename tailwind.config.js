const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms', // Adds a 'duration-2000' class
      },
      colors: {
        'band1': {
          light: '#FEFEFE',
          DEFAULT: '#E4CBC9',
          dark: '#D2B8B5',
        },
        'band2': {
          light: '#FFFEFE',
          DEFAULT: '#FFEFF2',
          dark: '#FFDCE2',
        },
        'band3': {
          light: '#EAF2CF',
          DEFAULT: '#D9E6A9',
          dark: '#C7DB80',
        },
        'band4': {
          light: '#ebf8fe',
          DEFAULT: '#bae6fd',
          dark: '#9eddfa',
        },
        text_accent: '#B08A20',
        my_dark: '#655952',
        bg: "#f0f1eb",
        'accent': {
          light: '#DF537F',
          DEFAULT: '#B0204E',
          dark: '#9B1C45',
        },
        'dark_green': {
          light: '#BDC2AE',
          DEFAULT: '#a4aa8e',
          dark: '#989F7F',
        },
        'gold': {
          light: '#DBB42C',
          DEFAULT: '#B69121',
          dark: '#926C15',
        },
      },
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'playwrite': ['"Playwrite IT Moderna"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
  ],
};
