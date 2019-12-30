const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./client/index.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Production",
      template: "template.html",
      inject: "body"
    }),
    // new webpack.ProvidePlugin({
    //   fetch: 'imports-loader?this=>global!exports?global.fetch!whatwg-fetch',
    //   Promise: 'es6-promise', // <============ add Promises for IE !!!
    // }),
    new webpack.BannerPlugin({
      banner: `@Build ${new Date().toLocaleString()}`
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[id].css"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [path.resolve(__dirname, "./client")]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|svg|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: "file-loader"
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader',
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: path.resolve(__dirname, 'dist'),
              hmr: process.env.NODE_ENV === "development"
              // options: { sourceMap: true },
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: "../"
            }
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "stylus-loader", // compiles Stylus to CSS
            options: {
              use: [
                // require('nib')(),
                // require('rupture')(),
              ]
            }
          }
        ]
      }
      // {
      //   test: /\.styl$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {

      //         hmr: process.env.NODE_ENV === 'development',
      //         options: { sourceMap: true },
      //       },
      //     },
      //     'stylus-loader',
      //   ],
      // },
    ]
  }
};
