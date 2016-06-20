var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.dev.config');

new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true, // With hot reloading
    inline: false,
    historyApiFallback: true,
    quiet: true // Without logging
}).listen('8080', 'localhost',function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at http://localhost:8080');
});