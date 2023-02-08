import {ButtonHTMLAttributes, FC} from 'react'
import {clsx} from 'shared/lib'

import {useTheme} from 'shared/contexts'
import {Button} from 'shared/ui'

import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'

import cls from './ThemeSwitch.m.scss'


interface ThemeSwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({className, ...rest}) => {
	const {theme, toggleTheme} = useTheme()
	return (
		<Button
			className={clsx(cls.root, className)}
			onClick={toggleTheme}
			{...rest}
		>
			{theme === 'light' ? <MoonIcon/> : <SunIcon/>}
		</Button>
	)
}