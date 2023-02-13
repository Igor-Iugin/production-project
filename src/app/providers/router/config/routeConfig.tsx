import {HomePage} from 'pages/Home'
import {AboutPage} from 'pages/About'
import {RouterPath} from 'shared/lib'
import type {ReactNode} from 'react'
import {NotFoundPage} from 'pages/NotFound'


interface RouteConfig {
	element?: ReactNode | null
	path?: string
}

export const routeConfig: RouteConfig[] = [
	{
		path: RouterPath.home,
		element: <HomePage/>
	},
	{
		path: RouterPath.about,
		element: <AboutPage/>
	},
	{
		path: RouterPath.notFound,
		element: <NotFoundPage/>
	}
]
