import {FC} from 'react'
import {clsx} from 'shared/lib'

import cls from './Navbar.m.scss'
import {useTheme} from 'shared/contexts'


interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
	const {toggleTheme} = useTheme()
	return (
		<nav className={clsx(cls.root, className)}>
			<button onClick={toggleTheme}>Toggle</button>
		</nav>
	)
}