/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    stats: 'minimal',
    output: {
        filename: 'javascript/[name].js'
    },
    performance: {
        hints: 'warning'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
            chunkFilename: 'style/[id].css',
            ignoreOrder: false
        })
    ],
    optimization: {
        namedModules: true,
        minimize: false
    },
    module: {
        rules: [{
            test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf|ico|pub)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    esModule: false,
                    outputPath: 'images',
                    publicPath: '../images',
                    name: '[name].[ext]'
                }
            }]
        }, {
            test: /\.(css|less)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: path.resolve(__dirname, '../dist'),
                    hmr: process.env.NODE_ENV === 'development'
                }
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader'
            }, {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }
            }, {
                loader: 'style-resources-loader',
                options: {
                    patterns: [path.resolve(__dirname, '../src/assets/css/global-var.less')]
                }
            }]
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        port: 9003,
        host: '0.0.0.0',
        index: 'index.html',
        headers: {
            'X-Custom-Foo': 'bar'
        },
        // https: true,
        // inline: true,
        // lazy: false,
        // noInfo: true,
        open: true,
        overlay: true, //编译运行时的错误直接显示在浏览器
        proxy: [{
            context: ['/tests'],
            target: 'http://localhost:3000',
            secure: false
        }, {
            context: () => true,
            target: 'https://surpass-dev.bizconf.cn/',
            secure: false,
            changeOrigin: true
        }],
        // quiet: false,
        useLocalIp: true
    }
});
