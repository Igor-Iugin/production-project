import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {NotFound} from './NotFound'
import {ThemeDecorator} from 'shared/config/storybook'


export default {
	title: 'pages/NotFound',
	component: NotFound,
	argTypes: {
		backgroundColor: {control: 'color'}
	}
} as ComponentMeta<typeof NotFound>

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator('dark')]
