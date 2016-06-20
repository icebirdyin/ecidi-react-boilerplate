var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // Needed for hot reloading
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "js/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel',
            include: path.join(__dirname, 'src')
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // Make hot loading work
    ]
};
