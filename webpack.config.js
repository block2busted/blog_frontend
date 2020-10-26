const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name]-[sha1:hash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash:8].css"
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    hot: true,
    open: "Google Chrome",
    host: "127.0.0.1",
    port: "3000",
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
