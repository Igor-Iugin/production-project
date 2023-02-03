import {RuleSetRule} from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BuildOptions} from './types/config'


export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {
	const typescript = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}

	const css = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader:'css-loader',
				options: {
					modules: {
						auto: /\.m./i,
						localIdentName: isDev
							? '[name]__[local]--[hash:base64:5]'
							: '[hash:base64:5]',
					},
				}
			},
			'sass-loader'
		]
	}

	return [
		typescript,
		css
	]
}