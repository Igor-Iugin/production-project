import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {AppLink} from './AppLink'
import {ThemeDecorator} from 'shared/config/storybook'


export default {
	title: 'shared/AppLink',
	component: AppLink,
	argTypes: {
		backgroundColor: {control: 'color'}
	},
	args: {
		to: 'home'
	}
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
	theme: 'primary',
	children: 'AppLink'
}

export const Secondary = Template.bind({})
Secondary.args = {
	theme: 'secondary',
	children: 'AppLink'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
	theme: 'primary',
	children: 'AppLink'
}
PrimaryDark.decorators = [ThemeDecorator('dark')]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
	theme: 'secondary',
	children: 'AppLink'
}
SecondaryDark.decorators = [ThemeDecorator('dark')]
