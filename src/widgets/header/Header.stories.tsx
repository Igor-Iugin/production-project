import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {Header} from './Header'
import {ThemeDecorator} from 'shared/lib/storybook'


export default {
	title: 'widget/Header',
	component: Header,
	argTypes: {
		backgroundColor: {control: 'color'}
	}
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator('light', true)]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator('dark', true)]
