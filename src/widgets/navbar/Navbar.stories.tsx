import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {Navbar} from './Navbar'
import {ThemeDecorator} from 'shared/config/storybook'


export default {
	title: 'widget/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: {control: 'color'}
	}
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator('light', true)]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator('dark', true)]
