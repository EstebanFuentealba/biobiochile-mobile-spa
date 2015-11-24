/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client/main'
  ],
  devtool: "source-map",
  output: {
    path: path.join(__dirname , '/../public/__build__/'),
    filename: 'bundle.js',
    publicPath: '/__build__/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin() /*,
    new webpack.optimize.UglifyJsPlugin()*/
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      query: {
        presets: ["es2015", "react"]
      }
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: [
      "client", "node_modules"
    ]
  },
};
