module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: require('cssnano')({
      preset: 'default',
    }),
  },
};
