const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

const plugins = [
    // 生成热部署替换所需的模块
    new webpack.HotModuleReplacementPlugin(),
    // 报错但不退出webpack进程
    new webpack.NoErrorsPlugin(),
    // 生成一个html文件，如果需要生成多个html文件则多设定几次该插件
    new HtmlWebpackPlugin({
        inject: true,  // 制定资源存放位置
        templateContent: templateContent(),  // html模板来源
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
        publicPath: 'http://localhost:8080/',
    },

    // 合并好的plugins信息
    plugins: dependencyHandlers().concat(plugins),

    // postcss-loader 用于在JavaScript中转换css样式的插件，需要postcssPlugins配合使用
    // css-loader 使css-module工作，模块当中能使用对象的方式来使用css
        // localIdentName 生成的样式名组织方式
        // modules 符合css-module规范
        // importLoaders 后面连接的loader数量
        // sourceMap 能让extract-text-webpack-plugin可以处理这些css文件
    // style-loader 将样式注入到style中
    cssLoaders: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',

    postcssPlugins: [
        // 补充:focus伪类的功能
        postcssFocus(),
        // 让css支持最新的语法
        cssnext({
            browsers: ['last 2 versions', 'IE > 10'],
        }),
        // 编译出现问题时报出错误
        postcssReporter({
            clearMessages: true,
        }),
    ],

    // babel-loader的配置信息
    babelQuery: {
        presets: ['react-hmre'],
    },

    devtool: 'cheap-module-eval-source-map',
});

function dependencyHandlers() {
    return [
        // 提取公共模块，然后将公共模块打包到 vendor.js。
        // main1.js => a,b,c
        // main2.js => a,b
        // 结果：
        // vendor.js => a,b
        // main1.js => c
        // main2.js => 空
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', // The chunk name of the commons chunk. 
            children: true, // If true all children of the commons chunk are selected. 
            minChunks: 2, // 至少被多少个模块使用的组件才能被包含到公共区域当中
            async: true, // 异步加载
        }),
    ];
}

function templateContent() {
    const html = fs.readFileSync(
        path.resolve(process.cwd(), 'app/index.html')
    ).toString();

    return html;
}
