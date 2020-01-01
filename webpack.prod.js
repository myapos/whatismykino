const webpack = require("webpack");
const TerserJSPlugin = require("terser-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

const conf = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  output: {
    // path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        PRODUCTION: process.env.PRODUCTION,
        USAGE: JSON.stringify(process.env.USAGE),
        USE_PYTHON_SERVER: JSON.stringify(process.env.USE_PYTHON_SERVER),
        VERSION: JSON.stringify(require("./package.json").version)
      }
    })
    // new BundleAnalyzerPlugin(),
  ]
});

module.exports = conf;
