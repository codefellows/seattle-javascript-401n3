'use strict';

const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build',
  },
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, 
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
};
