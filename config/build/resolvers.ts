import type {ResolveOptions} from 'webpack'
import type {BuildOptions} from './types/config'


export function buildResolvers({paths}: BuildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', 'index.ts', '.js'],
		preferAbsolute: true,
		modules: [paths.src, 'node_modules'],
		alias: {},
		mainFiles: ['index']
	}
}
