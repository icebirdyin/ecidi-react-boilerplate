const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        inject: true,
        templateContent: templateContent(),
    }),
];

module.exports = require('./webpack.base.config')({
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client',
        path.join(process.cwd(), 'app/app.js'),
    ],

    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },

    plugins: dependencyHandlers().concat(plugins),

    cssLoaders: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',

    postcssPlugins: [
        postcssFocus(),
        cssnext({
            browsers: ['last 2 versions', 'IE > 10'],
        }),
        postcssReporter({
            clearMessages: true,
        }),
    ],

    babelQuery: {
        presets: ['react-hmre'],
    },

    devtool: 'cheap-module-eval-source-map',
});

function dependencyHandlers() {
    return [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            children: true,
            minChunks: 2,
            async: true,
        }),
    ];
}

function templateContent() {
    const html = fs.readFileSync(
        path.resolve(process.cwd(), 'app/index.html')
    ).toString();

    return html;
}
