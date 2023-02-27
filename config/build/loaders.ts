import type {RuleSetRule} from 'webpack'
import type {BuildOptions} from './types/config'
import {CssLoader} from './loaders/cssLoaders'


export function buildLoaders({isDev, paths}: BuildOptions): RuleSetRule[] {
	const typescript = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}

	const babel = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					['i18next-extract', {
						locales: ['ru', 'en'],
						keyAsDefaultValue: true,
						outputPath: `${paths.public}/locales/{{locale}}/{{ns}}.json`,
						discardOldKeys: true
					}]
				]
			}
		}
	}

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
