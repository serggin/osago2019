const path = require ('path')
const webpack = require('webpack')
module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        path: path.resolve('public'),
        filename: 'main.js',
    },
    devServer: {
        contentBase: "./public"
    },
    devtool: "#eval-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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

