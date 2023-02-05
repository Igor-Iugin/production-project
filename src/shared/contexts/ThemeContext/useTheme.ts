import {useContext} from 'react'
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from 'shared/contexts/ThemeContext/ThemeProvider'


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