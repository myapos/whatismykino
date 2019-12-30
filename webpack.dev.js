const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common.js");

const PORT = 1234;
// console.log(process.env.PRODUCTION);
// https://github.com/cvut/fittable/issues/171
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  node: {
    fs: "empty"
  },
  devServer: {
    hot: true,
    overlay: true,
    noInfo: false,
    compress: true,
    port: PORT,
    publicPath: `http://localhost:${PORT}/dist/`,
    // historyApiFallback: true,
    historyApiFallback: {
      disableDotRule: true
    },
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: `http://localhost:${PORT}/dist/`
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        PRODUCTION: process.env.PRODUCTION,
        VERSION: JSON.stringify(require("./package.json").version)
      }
    })
  ]
});
