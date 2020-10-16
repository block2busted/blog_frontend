const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: "development",
    module: {
            rules: [
                {
                    test: /\.js$/,
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
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true,
        open: "Google Chrome",
        host: "127.0.0.1",
        port: "3000"
    }
}