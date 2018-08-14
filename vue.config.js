module.exports = {
  pages: {
    index: {
      entry: './site/main.js'
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'index'
    }
  },
  chainWebpack: config => {}
}
