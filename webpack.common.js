// webpack.common.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/i,
        use: ['file-loader']
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "dist/index.html",
    })
  ],
};
