const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: "production",
  devtool: 'hidden-source-map',
  entry: './app',
  output: {
    path: `${__dirname}/build`,
    filename: 'webpack.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        include: [
          path.resolve(__dirname, "node_modules/react"),
          path.resolve(__dirname, "node_modules/react-router")
        ],
        sideEffects: false
      }
    ]
  },
  resolve: {
    mainFields: [
      'browser',
      'module',
      'jsnext:main',
      'main'
    ]
  }
}
