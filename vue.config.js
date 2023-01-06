module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/malah-portfolio/'
      : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/main.scss";`,
      },
    },
  },
};
