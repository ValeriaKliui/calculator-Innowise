const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = function buildPlugins({ paths }) {
	const { html } = paths;

	return [
		new HtmlWebpackPlugin({
			template: html,
		}),
		new webpack.ProgressPlugin(),
	];
};
