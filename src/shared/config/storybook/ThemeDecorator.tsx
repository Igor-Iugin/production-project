import 'app/styles/index.scss'
import type {Story} from '@storybook/react'
import type {Theme} from 'shared/contexts/ThemeContext/ThemeProvider'


// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme, grid: boolean = false) => (StoryComponent: Story) => (
	<div className={`app ${theme} sb ${grid ? '' : 'griddles'}`}>
		<StoryComponent/>
	</div>
)
