import type {ComponentMeta, ComponentStory} from '@storybook/react'

import Home from './Home'
import {ThemeDecorator} from 'shared/config/storybook'


export default {
	title: 'pages/Home',
	component: Home,
	argTypes: {
		backgroundColor: {control: 'color'}
	}
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator('dark')]
