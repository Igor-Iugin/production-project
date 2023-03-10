import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {Loader} from './Loader'
import {ThemeDecorator} from 'shared/lib/storybook'


export default {
	title: 'shared/Loader',
	component: Loader,
	argTypes: {
		backgroundColor: {control: 'color'}
	}
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator('dark')]
