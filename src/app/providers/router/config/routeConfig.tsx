import type {RouteProps} from 'react-router-dom'
import {HomePage} from 'pages/Home'
import {AboutPage} from 'pages/About'
import {RouterPath} from 'shared/lib'


export const routeConfig: RouteProps[] = [
	{
		path: RouterPath.home,
		element: <HomePage/>
	},
	{
		path: RouterPath.about,
		element: <AboutPage/>
	}
]
