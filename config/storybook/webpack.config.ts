import type webpack from 'webpack'
import type {BuildPaths} from '../build/types/config'
import path from 'path'
import {CssLoader} from '../build/loaders/cssLoaders'
import {babelLoader} from '../build/loaders/babelLoader'


interface WPConfig {
	config: webpack.Configuration
}

export default ({config}: WPConfig) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, '..', '..', 'src', 'index.tsx'),
		build: path.resolve(__dirname, '..', '..', 'dist'),
		html: path.resolve(__dirname, '..', '..', 'public', 'index.html'),
		public: path.resolve(__dirname, '..', '..', 'public'),
		src: path.resolve(__dirname, '..', '..', 'src')
	}

	config.resolve?.modules?.push(paths.src)
	config.resolve?.extensions?.push('.ts', '.tsx')

	// @ts-expect-error
	config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return {...rule, exclude: /\.svg$/i}
		}
		return rule
	})

	config.module?.rules?.push({
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack']
	})
	config.module?.rules?.push(babelLoader(paths))
	config.module?.rules?.push(CssLoader(true))

	return config
}
