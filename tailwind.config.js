module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      'sans': ['Roboto', ],
    },
    extend: {
      colors: {
        transparent: 'var(--color-transparent)',
        transparentWhite: 'var(--color-transparent-white)',
        cyan: '#9cdbff',
        green: '#00ff31',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  variants: {},
  plugins: [],
}
