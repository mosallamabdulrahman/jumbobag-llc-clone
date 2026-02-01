module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#333b8a',
        brandGreen: '#82bc3f',
        brandDarkBlue: '#252b66',
        textGray: '#555555',
        lightGray: '#f7f7f7',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
      fontSize: {
        'xxs': '10px',
      }
    },
  },
  plugins: [],
}
