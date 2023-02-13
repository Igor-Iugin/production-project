import {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routeConfig} from '../config/routeConfig'


export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{routeConfig.map(route => (
					<Route key={route.path} {...route} />
				))}
			</Routes>
		</Suspense>
	)
}
