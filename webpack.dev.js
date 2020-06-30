const common = require('./webpack.common');
const path = require('path');
const merge = require('webpack-merge');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = merge(common, {
	mode: 'development',
	plugins: [
		new WebpackShellPlugin({
			onBuildEnd: ['npm run start:dev'],
		}),
	],
});
