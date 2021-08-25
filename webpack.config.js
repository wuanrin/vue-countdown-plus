const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const src = path.resolve(__dirname, './src')
const dist = path.resolve(__dirname, './dist')

module.exports = function(env = {}, argv) {
  const { prod } = env;
  const config = {
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'source-map' : 'inline-source-map',
    context: src,
    entry: './index.js',
    output: {
      path: dist,
      filename: prod ? 'countdown-plus.min.js' : 'countdown-plus.js',
      libraryTarget: 'umd',
      library: 'vue-countdown-plus'
    },
    module: {
      rules: [
        {
          test: /\.vue$/i,
          loader: 'vue-loader',
          include: src
        },
        {
          test: /\.jsx?$/i,
          loader: 'babel-loader',
          include: src,
          exclude: /node_modules/,
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  }
  return Promise.resolve(config)
}
