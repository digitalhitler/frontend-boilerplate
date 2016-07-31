'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');
const rimraf = require('rimraf');

module.exports = {
  context: __dirname + '/src',

  entry: {
    "app":  "./app/index",
    "vendor": [ "./vendor/index" ],
  },

  output: {
    path:       __dirname + '/assets',
    publicPath:     "/assets/",
    filename:       "[name].js",
    chunkFilename:  "[id].js",
    library:        "[name]"
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  plugins: [
    {
      apply: (compiler) => {
        rimraf.sync(compiler.options.output.path);
      }
    },
    new ExtractTextPlugin('[name].css', {allChunks: true}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG:     JSON.stringify('ru')
    }),
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path:     __dirname + '/assets'
    })
  ],
  //
   resolve: {
    // modulesDirectories: ['node_modules'],
     extensions:         ['', '.js', '.scss']
  },
  //
  // resolveLoader: {
  //   modulesDirectories: ['node_modules'],
  //   moduleTemplates:    ['*-loader', '*'],
  //   extensions:         ['', '.js']
  // },


  module: {

    loaders: [
    {
      test:   /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel'
    },
    {
      "test": /\.css?$/,
      "loader": "style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]"
    },
    // {
    //   "test": /\.scss?$/,
    //   loaders: ['style', 'css', 'sass']
    // },
      {
        test:   /\.scss/,
        loader: ExtractTextPlugin.extract('css!sass?resolve url')
      }, {
        test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]',
      }
    ]

  }
};


if (NODE_ENV == 'production') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );
}
