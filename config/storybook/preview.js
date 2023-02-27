import {StyleDecorator} from '../../src/shared/config/storybook'
import {addDecorator} from '@storybook/react'


export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
}

addDecorator(StyleDecorator)

export const decorators = [
	StyleDecorator
]
