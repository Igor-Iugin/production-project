import {Suspense} from 'react'
import {clsx} from 'shared/lib'
import {useTheme} from 'shared/contexts'
import {AppRouter} from 'app/providers/router'
import {Header} from 'widgets/header'
import {Navbar} from 'widgets/navbar'

import './styles/index.scss'


const App = () => {
	const {theme} = useTheme()

	return (
		<div className={clsx('app', theme)}>
			<Suspense fallback=''>
				<Header/>
				<Navbar/>
				<AppRouter/>
			</Suspense>
		</div>
	)
}

export default App
