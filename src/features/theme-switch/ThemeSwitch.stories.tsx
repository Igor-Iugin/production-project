import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {ThemeSwitch} from './ThemeSwitch'
import {ThemeDecorator} from 'shared/lib/storybook'


export default {
	title: 'features/ThemeSwitch',
	component: ThemeSwitch,
	argTypes: {
		backgroundColor: {control: 'color'}
	}
} as ComponentMeta<typeof ThemeSwitch>

const Template: ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator('dark')]
