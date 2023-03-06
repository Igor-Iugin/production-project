import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {Button} from './Button'
import {ThemeDecorator} from 'shared/lib/storybook'
import {ChevronRightIcon} from '@radix-ui/react-icons'


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

export const OutlineS = Template.bind({})
OutlineS.args = {
	children: 'Button',
	theme: 'outline',
	size: 's'
}

export const OutlineXL = Template.bind({})
OutlineXL.args = {
	children: 'Button',
	theme: 'outline',
	size: 'xl'
}

export const Inverted = Template.bind({})
Inverted.args = {
	children: 'Button',
	theme: 'inverted'
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

export const InvertedDark = Template.bind({})
InvertedDark.args = {
	children: 'Button',
	theme: 'inverted'
}
InvertedDark.decorators = [ThemeDecorator('dark')]


export const Icon = Template.bind({})
Icon.args = {
	children: <ChevronRightIcon/>,
	icon: true
}

export const IconS = Template.bind({})
IconS.args = {
	children: <ChevronRightIcon/>,
	icon: true,
	size: 's'
}

export const IconM = Template.bind({})
IconM.args = {
	children: <ChevronRightIcon/>,
	icon: true,
	size: 'm'
}

export const IconXL = Template.bind({})
IconXL.args = {
	children: <ChevronRightIcon/>,
	icon: true,
	size: 'xl'
}
