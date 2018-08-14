module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-layout-separator/'
    : '/',
  outputDir: 'dist/site',
  productionSourceMap: false,
  pages: {
    index: {
      entry: './site/main.js'
    }
  },
  chainWebpack: config => {}
}
