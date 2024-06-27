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
  theme: {
    extend: {
      colors: {
        bg: '#ffe5d9',
        band: '#f4acb7',
        text: '#685057',
        my_blue: "#bae6fd",
        new_blue: "#ebf8fe",
      },
    },
  },
  plugins: [],
};
