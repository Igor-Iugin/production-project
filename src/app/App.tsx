import {Link} from 'react-router-dom'
import {clsx} from 'shared/lib'
import {useTheme} from 'shared/contexts'
import {AppRouter} from 'app/providers/router'

import './styles/index.scss'


const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={clsx('app', theme)}>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>Инфо</Link>

			<button onClick={toggleTheme}>Toggle</button>
			<AppRouter/>
		</div>
	)
}

export default App