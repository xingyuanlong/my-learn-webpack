const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: "./src/index.js",
        another: './src/another-module.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "代码分离"
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};