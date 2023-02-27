import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {Button} from './Button'
import {ThemeDecorator} from 'shared/config/storybook'


export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: {control: 'color'}
	}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Button'
}

export const Clear = Template.bind({})
Clear.args = {
	children: 'Button',
	theme: 'clear'
}

export const Outline = Template.bind({})
Outline.args = {
	children: 'Button',
	theme: 'outline'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
	children: 'Button'
}
PrimaryDark.decorators = [ThemeDecorator('dark')]

export const ClearDark = Template.bind({})
ClearDark.args = {
	children: 'Button',
	theme: 'clear'
}
ClearDark.decorators = [ThemeDecorator('dark')]

export const OutlineDark = Template.bind({})
OutlineDark.args = {
	children: 'Button',
	theme: 'outline'
}
OutlineDark.decorators = [ThemeDecorator('dark')]
