import {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routeConfig} from '../config/routeConfig'
import {PageLoader} from 'widgets/page-loader'


export const AppRouter = () => {
	return (
		<Suspense fallback={<PageLoader/>}>
			<Routes>
				{routeConfig.map(route => (
					<Route key={route.path} {...route} />
				))}
			</Routes>
		</Suspense>
	)
}
