import {render} from '@testing-library/react'
import {I18nextProvider} from 'react-i18next'
import i18nTests from 'shared/config/i18n/i18nTests'
import type {ReactNode} from 'react'
import {MemoryRouter} from 'react-router-dom'


interface Options {
	route: string
}

export const renderComponent = (component: ReactNode, {route}: Options = {route: '/'}) => {
	render(
		<MemoryRouter initialEntries={[route]}>
			<I18nextProvider i18n={i18nTests}>
				{component}
			</I18nextProvider>
		</MemoryRouter>
	)
}
