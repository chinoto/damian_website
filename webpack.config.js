'use strict'
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	mode: 'development',
	entry: [
		'./src/app.js'
	],
	output:{
		sourceMapFilename: 'main.map'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: {
            presets: ['@babel/preset-env'],
            plugins: ['transform-vue-jsx']
          }
				}]
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true,
				uglifyOptions: {
					compress: true,
					ecma: 6,
					mangle: true
				}
			})
		]
	}
}
