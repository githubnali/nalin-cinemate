/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        other: { min: '340px', max: '1600px' },
      },
      colors: {
        darkbg: '#1E293B',
      },
    },
  },
  plugins: [],
};
