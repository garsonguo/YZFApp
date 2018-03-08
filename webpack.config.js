const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './app/main.js'
    },
    devServer: {
        clientLogLevel: 'warning',
        hot: true,
        compress: true,
        port: 9000,
        publicPath: '/',
        quiet: false
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}