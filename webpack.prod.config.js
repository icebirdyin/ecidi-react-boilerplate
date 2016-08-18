const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

module.exports = require('./webpack.base.config')({
    entry: [
        path.join(process.cwd(), 'app/app.js'),
    ],

    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
    },

    cssLoaders: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?modules&importLoaders=1!postcss-loader'
    ),

    postcssPlugins: [
        postcssFocus(),
        cssnext({
            browsers: ['last 2 versions', 'IE > 10'],
        }),
        postcssReporter({
            clearMessages: true,
        }),
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            children: true,
            minChunks: 2,
            async: true,
        }),

        new webpack.optimize.OccurrenceOrderPlugin(true),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false, 
            },
        }),

        // 生成一个html文件，如果需要生成多个html文件则多设定几次该插件
        new HtmlWebpackPlugin({
            template: 'app/index.html', // html模板来源
            minify: {
                removeComments: true, // 去掉注释信息
                collapseWhitespace: true, // 合并空白符
                removeRedundantAttributes: true, // 去掉多余的属性，比如某些默认属性
                useShortDoctype: true, // 使用 <!DOCTYPE html>
                removeEmptyAttributes: true, // 去掉空白的属性，比如 id = " "
                removeStyleLinkTypeAttributes: true, // 去掉 style 和 link 标签的 type="text/css"
                keepClosingSlash: true, // 保持标签闭合
                minifyJS: true, // 压缩 JavaScript (使用 UglifyJS)
                minifyCSS: true, // 压缩 CSS (uses clean-css)
                minifyURLs: true, // 压缩 URLs (uses relateurl)
            },
            inject: true, // 制定资源存放位置
        }),

        // 将css文件提取出来
        new ExtractTextPlugin('[name].[contenthash].css'),

        new OfflinePlugin({
            excludes: ['.htaccess'],

            caches: {
                main: [':rest:'],
                additional: ['*.chunk.js'],
            },

            safeToUseOptionalCaches: true,

            AppCache: {
                caches: ['main', 'additional'],
            },
        }),
    ],
});
