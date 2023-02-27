import {RouterDecorator, StyleDecorator, ThemeDecorator} from '../../src/shared/config/storybook'


export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
}

export const decorators = [
	StyleDecorator,
	ThemeDecorator('light', false),
	RouterDecorator
]
