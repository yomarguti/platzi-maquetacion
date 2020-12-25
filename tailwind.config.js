module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        primary: '#47cfac',
      },
      backgroundImage: (theme) => ({
        'home-main': "url('/assets/images/Cover.png')",
      }),
    },
    fontFamily: {
      sans: [
        'Roboto',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Roboto Slab', 'serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
