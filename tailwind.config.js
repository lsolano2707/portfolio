/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans'],
        caveatBrush: ['Caveat Brush', 'cursive'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first', 'last', 'odd', 'even'],
      backgroundColor: ['first', 'last', 'odd', 'even'],
    },
  },
  plugins: [],
};
