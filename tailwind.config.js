/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
    },
    colors: {
      white: '#FFFFFF',
      blue: '#4A96FF',
      black: '#191920',
      gray: {
        300: '#C5C7CA',
        400: '#7F8084',
        500: '#27292D',
      },
    },
  },
  plugins: [],
};
