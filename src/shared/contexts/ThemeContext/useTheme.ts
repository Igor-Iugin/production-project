import {useContext} from 'react'
import type {Theme} from 'shared/contexts/ThemeContext/ThemeProvider'
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from 'shared/contexts/ThemeContext/ThemeProvider'


interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export function useTheme(): UseThemeResult {
	const {theme, setTheme} = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme: Theme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme,
		toggleTheme
	}
}
