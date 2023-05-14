/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      fontFamily:{
        'sans': ['"Bungee"']
      },
      extend: {}
  },
  variants: {},
  plugins: []
}
