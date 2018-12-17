'use strict'
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: ['./src/app.js'],
	output: {
		filename: 'bundle_[name].[chunkhash].js',
		path: __dirname + '/dist',
		sourceMapFilename: 'main.map'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: ['babel-loader']
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template:'index.tmpl.html'}),
		new CopyWebpackPlugin([{from:'static',to:'static'}]),
		new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin),
	],
	optimization:{
		splitChunks:{
			cacheGroups:{
				
			}
		}
	}
}
