import {FC, useState} from 'react'
import {clsx} from 'shared/lib'
import {Button, ThemeSwitch} from 'shared/ui'

import cls from './Navbar.m.scss'


interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
	const [open, setOpen] = useState(true)

	const handleOpen = () => {
		setOpen(prev => !prev)
	}

	return (
		<nav className={clsx(cls.root, className, {[cls.open]: open})}>
			<Button onClick={handleOpen}>Toggle</Button>

			<div className={cls.switchers}>
				<ThemeSwitch/>

			</div>
		</nav>
	)
}