import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'

import {HomeAsync} from './pages/Home/Home.async'
import {AboutAsync} from './pages/About/About.async'
import {useTheme} from './theme/useTheme'

import './styles/index.scss'


const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={`app ${theme}`}>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>Инфо</Link>

			<button onClick={toggleTheme}>Toggle</button>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<HomeAsync />} />
					<Route path={'/about'} element={<AboutAsync/>} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App