module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/tfa-style-code-generator/' : '/',
  devServer: {
    proxy: process.env.VUE_APP_API_URL
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'T&F Sports Apparel'
    }
  }
}
