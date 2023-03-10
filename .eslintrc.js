module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json'
	},
	plugins: ['react', '@typescript-eslint', 'i18next'],
	rules: {
		'no-multiple-empty-lines': 'off',
		quotes: 1,
		indent: ['error', 'tab'],
		'no-tabs': ['error', {
			allowIndentationTabs: true
		}],
		'object-curly-spacing': ['error', 'never'],
		'react/react-in-jsx-scope': 0,
		'no-trailing-spaces': [2, {
			skipBlankLines: true
		}],
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/object-curly-spacing': 'off',
		'@typescript-eslint/consistent-type-imports': [2, {
			fixStyle: 'separate-type-imports'
		}],
		'@typescript-eslint/space-before-function-paren': 0,
		'@typescript-eslint/strict-boolean-expressions': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-floating-promises': 0,
		'@typescript-eslint/no-misused-promises': 0,
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/consistent-type-assertions': 0,
		'@typescript-eslint/prefer-includes': 0,

		'i18next/no-literal-string': [2, {
			markupOnly: true,
			ignoreAttribute: ['data-testid', 'to']
		}]
	},
	globals: {
		_DEV_: true
	}
}
