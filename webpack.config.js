// require('babel-polyfill');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const StringReplacePlugin = require('string-replace-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const PORT = 1234;

const config = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: `http://localhost:${PORT}/dist/`
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules", "react"),
      "react-dom": path.resolve(__dirname, "node_modules", "react-dom")
    }
  },
  node: {
    fs: "empty",
    child_process: "empty"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [path.resolve(__dirname, "./src")]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: "file-loader"
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.styl$/,
        // use: 'css-loader',
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "stylus-loader" // compiles Stylus to CSS
          }
        ]
      }
    ]
  },

  devServer: {
    hot: true,
    overlay: true,
    noInfo: false,
    compress: true,
    port: PORT,
    publicPath: `http://localhost:${PORT}/dist/`,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: `Build: ${new Date().toLocaleString()}`
    })
  ]
};

module.exports = config;
