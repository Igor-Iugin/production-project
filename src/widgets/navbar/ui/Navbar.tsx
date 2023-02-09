import {FC, useState} from 'react'
import {clsx} from 'shared/lib'
import {Button} from 'shared/ui'
import {ThemeSwitch} from 'features/theme-switch'

import cls from './Navbar.m.scss'
import {LangSwitch} from 'features/lang-switch'


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
				<LangSwitch/>
			</div>
		</nav>
	)
}