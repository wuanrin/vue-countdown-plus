const path = require('path')
const output = path.resolve(__dirname, 'docs')

module.exports = {
  lintOnSave: false,
  outputDir: output,
  chainWebpack: config => {
    config
      .output
      .filename('js/[name].js')
      .chunkFilename('js/[name].js')
    config
      .plugin('html')
      .tap(options => {
        options[0].title = 'VueCountdownPlus Examples'
        return options
      })
    config
      .plugin('extract-css')
      .tap(options => {
        options[0].filename = options[0].chunkFilename = 'css/[name].css'
        return options
      })
  }
}
