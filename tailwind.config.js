/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{htm,js}"],
  theme: {
    screens: {
      'mini': '350px',
      'lsm': '570px',
      'sm': '640px',
      'md': '768px',
      'laptop': '998px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

