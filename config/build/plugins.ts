import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, {WebpackPluginInstance} from 'webpack'
import {BuildOptions} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'


export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
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
			__DEV__: isDev
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}