const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    // entry: { index: path.resolve(__dirname, "source", "index.js") }
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
};