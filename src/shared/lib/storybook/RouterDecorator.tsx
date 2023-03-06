import 'app/styles/index.scss'
import type {Story} from '@storybook/react'
import {BrowserRouter} from 'react-router-dom'


export const RouterDecorator = (story: () => Story) => (
	<BrowserRouter>
		{story()}
	</BrowserRouter>
)
