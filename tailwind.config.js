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
      colors: {
        'band1': {
          light: '#ffffff',
          DEFAULT: '#ffe5d9',
          dark: '#ffd5c2',
        },
        'band2': {
          light: '#fadbe0',
          DEFAULT: '#f4acb7',
          dark: '#ef8191',
        },
        'band3': {
          light: '#ebf8fe',
          DEFAULT: '#bae6fd',
          dark: '#9eddfa',
        },
        my_dark: '#685057',
        bg: "#ebf8fe",
        'accent': {
          light: '#a599c2',
          DEFAULT: '#7c6ca6',
          dark: '#64548c',
        },
      },
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'playwrite': ['"Playwrite IT Moderna"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
