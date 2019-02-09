const path = require ('path')
const webpack = require('webpack')
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve('build'),
        filename: 'main.js',
    },
    devServer: {
        contentBase: "./public"

    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }

        ],
    },


}

