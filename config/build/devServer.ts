import {BuildOptions} from './types/config'
import type {Configuration as ServerConfiguration} from 'webpack-dev-server'


export function buildDevServer(options: BuildOptions): ServerConfiguration {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
		hot: true
	}
}