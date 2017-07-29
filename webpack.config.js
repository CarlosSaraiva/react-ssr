var webpack = require('webpack');
var path = require('path')

var config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'), 
    publicPath: "/assets/",
    filename: '[name].bundle.js',
  },
};

module.exports = config;