import HtmlWebpackPlugin from 'html-webpack-plugin'
import type {WebpackPluginInstance} from 'webpack'
import webpack from 'webpack'
import type {BuildOptions} from './types/config'
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
			_DEV_: isDev
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
