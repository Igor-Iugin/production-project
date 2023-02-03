import React, {createContext, FC, useMemo, useState} from 'react'



export enum Theme {
	LIGHT = 'light',
	DARK = 'dark'
}

export interface ThemeContextProps {
	theme?: Theme
	setTheme?: (theme: Theme) => void
}




export const LOCAL_STORAGE_THEME_KEY = 'theme'
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeContext = createContext<ThemeContextProps>({})

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