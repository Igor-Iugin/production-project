import type {FC} from 'react'
import {createContext, useMemo, useState} from 'react'


export type Theme = 'light' | 'dark'

export interface ThemeContextProps {
	theme: Theme
	setTheme: (theme: Theme) => void
}


export const LOCAL_STORAGE_THEME_KEY = 'theme'
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || 'light'

export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'light',
	setTheme: () => {
	}
})


export const ThemeProvider: FC = ({children}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)


	const defaultValue = useMemo(() => ({
		theme, setTheme
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultValue}>
			{children}
		</ThemeContext.Provider>
	)
}
