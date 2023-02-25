/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path'


export default {
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: [
		'\\\\node_modules\\\\'
	],
	moduleDirectories: [
		'node_modules',
		'src'
	],
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node'
	],
	rootDir: '../../',
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
	],
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	moduleNameMapper: {
		'\\.s?css$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
		'@/(.*)': '<rootDir>src/$1'
	}

}
