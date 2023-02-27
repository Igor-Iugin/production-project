import type {RuleSetRule} from 'webpack'
import type {BuildOptions} from './types/config'
import {CssLoader} from './loaders/cssLoaders'
import {babelLoader} from './loaders/babelLoader'


export function buildLoaders({isDev, paths}: BuildOptions): RuleSetRule[] {
	const typescript = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}

	const babel = babelLoader(paths)

	const svg = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack']
	}

	const files = {
		test: /\.(png|jpe?g|webp|avif)$/i,
		use: [
			{
				loader: 'file-loader'
			}
		]
	}

	const css = CssLoader(isDev)

	return [
		files,
		svg,
		babel,
		typescript,
		css
	]
}
