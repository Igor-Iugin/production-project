import type {ButtonHTMLAttributes, FC} from 'react'

import {useTheme} from 'shared/contexts'
import {Button} from 'shared/ui'

import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'


interface ThemeSwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({className, ...rest}) => {
	const {theme, toggleTheme} = useTheme()
	return (
		<Button icon theme='clear' onClick={toggleTheme} {...rest}>
			{theme === 'light'
				? <MoonIcon width='24px' height='24px'/>
				: <SunIcon width='24px' height='24px'/>
			}
		</Button>
	)
}
