import type {FC} from 'react'
import {useState} from 'react'
import {clsx} from 'shared/lib'
import {ThemeSwitch} from 'features/theme-switch'

import cls from './Navbar.m.scss'
import {LangSwitch} from 'features/lang-switch'


interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({className, ...rest}) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(prev => !prev)
	}

	return (
		<nav className={clsx(cls.root, className, {[cls.open]: open})} {...rest}>
			{/* <Button data-testid='navToggle' onClick={handleOpen}>Toggle</Button> */}

			<div className={cls.switchers}>
				<ThemeSwitch/>
				<LangSwitch/>
			</div>
		</nav>
	)
}
