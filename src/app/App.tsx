import {clsx} from 'shared/lib'
import {useTheme} from 'shared/contexts'
import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/Navbar'

import './styles/index.scss'


const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={clsx('app', theme)}>
			<Navbar/>
			<button onClick={toggleTheme}>Toggle</button>
			<AppRouter/>
		</div>
	)
}

export default App