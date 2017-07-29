const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsByTypePlugin = require('webpack-assets-by-type-plugin')

const config = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',      
      'webpack-hot-middleware/client',
      './index.js'      
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'), 
    publicPath: '/assets/',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      { 
        test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/, 
        loader: 'url-loader?limit=8000' 
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
  plugins: [
    new AssetsByTypePlugin({
      path: path.join(__dirname, 'dist','assets.json') // default
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()    
  ]  
};

if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";
}

module.exports = config;