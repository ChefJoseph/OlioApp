/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [ 
    require('flowbite/plugin')
  ],
}
