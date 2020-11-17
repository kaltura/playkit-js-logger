'use strict';

const webpack = require('webpack');
const path = require('path');
const packageData = require('./package.json');

const plugins = [
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(packageData.version),
    __NAME__: JSON.stringify(packageData.name)
  })
];

module.exports = {
  context: __dirname + '/src',
  entry: {
    'playkit-logger': 'index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: ['playkit', 'logger'],
    libraryTarget: 'umd',
    umdNamedDefine: true,
    devtoolModuleFilenameTemplate: './logger/[resource-path]'
  },
  devtool: 'source-map',
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: [/node_modules/, /bin/]
      },
      {
        test: /\.js$/,
        exclude: [/bin/, /node_modules/],
        enforce: 'pre'
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/src',
    host: '192.168.68.107',
    port: 3007
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
};
