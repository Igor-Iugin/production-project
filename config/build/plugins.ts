import HtmlWebpackPlugin from 'html-webpack-plugin'
import type {WebpackPluginInstance} from 'webpack'
import webpack from 'webpack'
import type {BuildOptions} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'


export function buildPlugins({paths, isDev, analyze}: BuildOptions): WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:6].css',
			chunkFilename: 'css/[name].[contenthash:6].css'
		}),
		new webpack.DefinePlugin({
			_DEV_: isDev
		}),
		// @ts-expect-error
		new BundleAnalyzerPlugin({
			analyzerMode: analyze ? 'server' : 'disabled'
		})
	]
}
