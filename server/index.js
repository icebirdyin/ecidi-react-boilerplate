const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

setup(app, {
	outputPath: resolve(process.cwd(), 'build'),
	publicPath: '/',
});

const port = argv.port || process.env.PORT || 8080;

app.listen(port, (err) => {
	if (err) {
		return logger.error(err.message);
	}

	if (ngrok) {
		ngrok.connect(port, (innerErr, url) => {
			if (innerErr) {
				return logger.error(innerErr);
			}

			logger.appStarted(port, url);
		});
	} else {
		logger.appStarted(port);
	}
});