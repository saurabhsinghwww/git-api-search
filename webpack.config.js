var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  //debug, es6 to es5 mapping
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: function (module, count) {
        var context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
    new HtmlWebpackPlugin({
      title: 'API Query Builder',
      filename: 'index.html', //output file name
      template: './src/index.html' //input file
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loaders: ["babel-loader"]
      },
      { test: /\.css$/, loaders: ['css-loader'] }
    ]
  },
  externals: {
    configuration: JSON.stringify(require("./conf/config.json"))
  },
  devServer: {
    contentBase: APP_DIR, // for loading asserts form content base
    compress: true,
    port: 8087,

    historyApiFallback: {
      index: '/'
    }
  }
};

module.exports = config;