import type {RuleSetRule} from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type {BuildOptions} from './types/config'


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

	const css = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /\.m./i,
						localIdentName: isDev
							? '[name]__[local]--[hash:base64:5]'
							: '[hash:base64:5]'
					}
				}
			},
			'sass-loader'
		]
	}

	return [
		files,
		svg,
		babel,
		typescript,
		css
	]
}
