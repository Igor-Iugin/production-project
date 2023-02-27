import type webpack from 'webpack'
import type {BuildPaths} from '../build/types/config'
import path from 'path'
import {CssLoader} from '../build/loaders/cssLoaders'


interface WPConfig {
	config: webpack.Configuration
}

export default ({config}: WPConfig) => {
	const paths: BuildPaths = {
		entry: '',
		build: '',
		html: '',
		public: '',
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
	config.module?.rules?.push(CssLoader(true))

	return config
}
