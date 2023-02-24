import {render} from 'react-dom'
import App from './app/App'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'shared/contexts'
import {ErrorBoundary} from 'app/providers/ErrorBoundary'

import 'shared/config/i18n'


render(
	<BrowserRouter>
		{/* @ts-expect-error */}
		<ErrorBoundary>
			<ThemeProvider>
				<App/>
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById('root')
)
