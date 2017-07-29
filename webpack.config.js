var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-es2015'].map(require.resolve)
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }      
    ]
  },
  devtool: "eval-source-map",
  devServer: {
    open: true,
    compress: true,
    hot: false,    
    contentBase: path.join(__dirname, 'src'),
    openPage: ''
  },
  plugins: [new HtmlWebpackPlugin()]
};

if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";
}

module.exports = config;