var webpack = require('webpack');
var path = require('path')

var config = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.join(__dirname, 'dist'), 
    publicPath: '/assets',
    filename: '[name].bundle.js',
  },
  devServer: {
    open: true,
    compress: true,
    hot: false,    
    contentBase: path.join(__dirname, 'src'),
    openPage: ''
  }
};

module.exports = config;