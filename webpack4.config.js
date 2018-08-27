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
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].bundle.js'
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
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        venders: {
          test: /node_modules/,
          enforce: true
        }
      }
    },
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
