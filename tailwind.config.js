module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.njk',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green-lighter': '#aade87',
        'brand-green-darker': '#447821'
      },
    },
    fontFamily: {
      'display': ['"Titillium Web"'],
      'sans': ['"Open Sans"'],
    }
  },
  variants: {},
  plugins: []
}
