const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    webpack4: './app'
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'webpack4.js',
    chunkFilename: '[name].bundle.js'
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
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  stats: 'verbose',
  resolve: {
    mainFields: [
      'browser',
      'module',
      'jsnext:main',
      'main'
    ]
  }
}
