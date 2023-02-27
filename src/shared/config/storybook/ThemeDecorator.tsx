import 'app/styles/index.scss'
import type {Story} from '@storybook/react'
import type {Theme} from 'shared/contexts/ThemeContext/ThemeProvider'


export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
	<div className={`app ${theme}`} style={{gridArea: 'header'}}>
		<StoryComponent/>
	</div>
)
