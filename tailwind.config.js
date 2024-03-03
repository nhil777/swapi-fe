/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: 'white',
      whiteEdgar: '#ededed',
      gainsboro: '#dadada',
      greenTeal: '#0ab463',
      darkGray: 'rgba(132, 132, 132, 0.75)',
      gray: '#c4c4c4',
    },
    extend: {
      spacing: {
        '30px': '30px',
        '20px': '20px',
      },
    },
  },
};
