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
        bg: '#ffe5d9',
        band: '#f4acb7',
        text: '#685057',
        my_blue: "#bae6fd",
        new_blue: "#ebf8fe",
        border: "#7c6ca6",
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
