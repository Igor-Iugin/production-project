import type {ComponentMeta, ComponentStory} from '@storybook/react'

import About from './About'
import {ThemeDecorator} from 'shared/lib/storybook'


export default {
	title: 'pages/About',
	component: About,
	argTypes: {
		backgroundColor: {control: 'color'}
	}
} as ComponentMeta<typeof About>

const Template: ComponentStory<typeof About> = (args) => <About {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator('dark')]
