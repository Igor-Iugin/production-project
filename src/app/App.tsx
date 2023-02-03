import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'

import {HomePage} from 'pages/Home'
import {AboutPage} from 'pages/About'
import {clsx} from 'shared/lib'
import {useTheme} from 'shared/contexts'

import './styles/index.scss'


const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={clsx('app', theme)}>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>Инфо</Link>

			<button onClick={toggleTheme}>Toggle</button>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<HomePage />} />
					<Route path={'/about'} element={<AboutPage/>} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App