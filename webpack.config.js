const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = env => {
    if (!env) {
        env = {};
    }
    let plugins = [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin("style.css")
    ];
    if (env.production) {
        plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new UglifyJsPlugin({
                sourceMap: true
            })
        );
    }
    return {
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
            path: path.resolve(__dirname, './dist'),
            publicPath: '/'
        },
        module: {
            rules: [{
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        cssModules: {
                            localIdentName: '[path][name]---[local]---[hash:base64:5]',
                            camelCase: true
                        },
                        loaders: {
                            scss: ExtractTextPlugin.extract({
                                use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader',
                                fallback: 'vue-style-loader'
                            })
                        },
                        extractCSS: true
                    }
                },
                {
                    test: /\.scss/,
                    loader: 'style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
                    loader: 'file-loader'
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'file-loader'
                }
            ]
        },
        plugins: plugins,
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
}