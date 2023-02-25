import type {ReactNode} from 'react'
import {render} from '@testing-library/react'
import {I18nextProvider} from 'react-i18next'
import i18nTests from '../../../config/i18n/i18nTests'


export function renderI18n(component: ReactNode) {
	return render(
		<I18nextProvider i18n={i18nTests}>
			{component}
		</I18nextProvider>
	)
}
