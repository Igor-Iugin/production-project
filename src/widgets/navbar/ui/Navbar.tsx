import {FC} from 'react'
import {clsx} from 'shared/lib'
import {ThemeSwitch} from 'shared/ui'

import cls from './Navbar.m.scss'


interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
	return (
		<nav className={clsx(cls.root, className)}>
			<ThemeSwitch/>
		</nav>
	)
}