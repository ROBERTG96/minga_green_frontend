/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        mobile: "url('/src/assets/img/NavBar/HomeMobile.png')",
        desktop: "url('/src/assets/img/NavBar/naruto.png')",
        home1: "url('/src/assets/img/NavBar/backgroundHome1.png')",
        footer: "url('/src/assets/img/NavBar/footer.png')"

      }),
      fontFamily: {
        'montserrat': ['Montserrat'],
        'poppins': ['Poppins'],
        'roboto': ['Roboto', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: []
}
