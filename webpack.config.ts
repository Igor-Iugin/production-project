import type {Configuration} from 'webpack'
import {buildWebpackConfig} from './config/build/config'
import type {BuildEnv, BuildPaths} from './config/build/types/config'
import path from 'path'


export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		public: path.resolve(__dirname, 'public'),
		src: path.resolve(__dirname, 'src')
	}

	const mode = env.mode || 'development'
	const isDev = mode === 'development'
	const PORT = env.port || 3000
	const analyze = env.analyze || false

	const config: Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
		analyze
	})

	return config
}
