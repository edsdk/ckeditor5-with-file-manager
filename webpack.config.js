'use strict';

/* eslint-env node */

const path = require( 'path' );
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const TerserWebpackPlugin = require( 'terser-webpack-plugin' );

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },

	entry: path.resolve( __dirname, 'src', 'ckeditor5-flmngr.js' ),

	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: 'ckeditor5-flmngr.js',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},

	optimization: {
		minimizer: [
			new TerserWebpackPlugin( {
				sourceMap: true,
				terserOptions: {
					format: {
						// 'some' keeps the @license/@preserve notices the bundled sources carry -
						// CKEditor 5 puts one in every module. The old /^!/ matched none of them
						// (they are /**, not /*!), so it stripped what it meant to keep.
						comments: 'some'
					}
				},
				extractComments: false
			} )
		]
	},

	plugins: [
		new CKEditorWebpackPlugin( {
			// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
			// When changing the built-in language, remember to also change it in the editor's configuration (src/ckeditor.js).
			language: 'en',
			additionalLanguages: 'all'
		} ),
	],

	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [ 'raw-loader' ]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'singletonStyleTag',
							attributes: {
								'data-cke': true
							}
						}
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
	}
};
