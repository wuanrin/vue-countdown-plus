module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          chrome: '58',
          ie: '10'
        }
      }
    ]
  ],
  plugins: [
    'transform-vue-jsx'
  ]
}
