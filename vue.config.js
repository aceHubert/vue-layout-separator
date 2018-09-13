const fs = require('fs')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-layout-separator/'
    : '/',
  outputDir: process.env.TARGET === 'lib'
    ? 'dist'
    : 'dist/site',
  productionSourceMap: false,
  pages: {
    index: {
      entry: './site/main.js'
    }
  },
  configureWebpack: config => {
    fs.writeFile('d://test.txt', JSON.stringify(config, null, 2), () => {})
  },
  chainWebpack: config => {}
}
