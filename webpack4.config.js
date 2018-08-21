const path = require('path');

module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    webpack4: './app'
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'webpack4.js'
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
  optimization: {
    splitChunks:{
      chunks: 'all'
    }
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
