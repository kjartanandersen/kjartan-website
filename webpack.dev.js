const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        static: {
          directory: path.resolve(__dirname, "./dist"),
        },
        port: 3000,
        historyApiFallback: true,
      },
    plugins: [
      new Dotenv({
        path: './dev.env'
      })
    ]
});
