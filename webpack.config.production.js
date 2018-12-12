const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // installed via npm

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const config = require('./webpack.config');

// Reflect.deleteProperty(config, 'devServer');
Reflect.deleteProperty(config, 'plugins');
Reflect.deleteProperty(config.module, 'rules');

// https://slack.engineering/keep-webpack-fast-a-field-guide-for-better-build-performance-f56a5995e8f1
// https://hackernoon.com/reduce-webpack-bundle-size-for-production-880bb6b2c72f
const uglifyOptions = {
  arrows: false,
  booleans: false,
  cascade: false,
  collapse_vars: false,
  comparisons: false,
  computed_props: false,
  hoist_funs: false,
  hoist_props: false,
  hoist_vars: false,
  if_return: false,
  inline: false,
  join_vars: false,
  keep_infinity: true,
  loops: false,
  negate_iife: false,
  properties: false,
  reduce_funcs: false,
  reduce_vars: false,
  sequences: false,
  side_effects: false,
  switches: false,
  top_retain: false,
  toplevel: false,
  typeofs: false,
  unused: false,
  // Switch off all types of compression except those needed to convince
  // react-devtools that we're using a production build
  conditionals: true,
  dead_code: true,
  evaluate: true,
  cache: true,
  parallel: true,
  sourceMap: false,
};

config.output = {
  filename: 'bundle.js',
  chunkFilename: 'bundle.[chunkhash].js',
  path: path.resolve(__dirname, 'dist'),
};

config.devtool = false;

config.module.rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
];

config.mode = 'production';

Object.assign(config.output, {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist/',
});

config.plugins = [
  new CleanWebpackPlugin(['dist']),
  new UglifyJsPlugin({
    uglifyOptions,
  }),
  new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    Promise: 'es6-promise', // <============ add Promises for IE !!!
  }),
  // new ExtractTextPlugin('player.css'),
  new webpack.BannerPlugin({
    banner: `@Build ${new Date().toLocaleString()}`,
  }),
];

Reflect.deleteProperty(config, 'devServer');

module.exports = config;
