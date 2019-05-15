const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './example/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: 'index.html'
    })
  ]
}