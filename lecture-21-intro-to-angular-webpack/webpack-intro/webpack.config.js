let HTMLPlugin = require ('html-webpack-plugin')
module.exports = {
  entry: './app',
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']// webpack 2.x
        // load: 'style!css!sass' webpack 1.x
      } 
    ]
  },
  plugins: [
    new HTMLPlugin()
  ]
}
