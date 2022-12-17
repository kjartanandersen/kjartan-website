// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    devServer: {
      static: {       
        directory: path.resolve(__dirname, './dist')
      },
      port: 3000,
      historyApiFallback: true,
    },
    module: {
        rules: [
          {
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      resolve: {
        extensions: [ '.ts', '.tsx', '.jsx', '.js'],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'dist/index.html'
        })
      ],
      
  }