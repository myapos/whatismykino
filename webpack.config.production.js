const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin"); // installed via npm
const TerserJSPlugin = require("terser-webpack-plugin");
const path = require("path");
const config = require("./webpack.config");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// Reflect.deleteProperty(config, 'devServer');
Reflect.deleteProperty(config, "plugins");
// Reflect.deleteProperty(config.module, 'rules');
Reflect.deleteProperty(config, "devServer");

config.devtool = false;

// config.module.rules = [
//   {
//     test: /\.js$/,
//     exclude: /node_modules/,
//     use: {
//       loader: 'babel-loader',
//     },
//   },
//   {
//     test: /\.css$/,
//     use: ['style-loader', 'css-loader'],
//   },
//   {
//     test: /\.styl$/,
//     // use: 'css-loader',
//     use: [
//       {
//         loader: "style-loader" // creates style nodes from JS strings
//       },
//       {
//         loader: "css-loader" // translates CSS into CommonJS
//       },
//       {
//         loader: "stylus-loader" // compiles Stylus to CSS
//       }
//     ]
//   }
// ];

config.mode = "production";

Object.assign(config.output, {
  path: path.resolve(__dirname, "dist"),
  publicPath: "/dist/"
});

config.optimization = {
  minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
};

config.plugins = [
  new CleanWebpackPlugin(["dist"]),

  new webpack.ProvidePlugin({
    Promise:
      "imports-loader?this=>global!exports-loader?global.Promise!es6-promise"
    // fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
  }),
  // new ExtractTextPlugin('player.css'),
  new webpack.BannerPlugin({
    banner: `@Build ${new Date().toLocaleString()}`
  }),
  new webpack.DefinePlugin({
    "process.env": {
      USAGE: JSON.stringify(process.env.USAGE)
    }
  })
];

module.exports = config;
