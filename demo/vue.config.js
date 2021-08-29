const path = require('path')
const vueCountdownPlusPath = path.resolve(__dirname, '../dist/countdown-plus.js')

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias.set('vue-countdown-plus', vueCountdownPlusPath)
    config.plugin('html').tap(options => {
      options[0].title = 'VueCountdownPlus Examples'
      return options
    })
  }
}
