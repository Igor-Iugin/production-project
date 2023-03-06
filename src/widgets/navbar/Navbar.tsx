import type {FC} from 'react'
import {useState} from 'react'
import {clsx} from 'shared/lib'
import {ThemeSwitch} from 'features/theme-switch'
import {LangSwitch} from 'features/lang-switch'
import {ChevronLeftIcon, ChevronRightIcon} from '@radix-ui/react-icons'
import {Button} from 'shared/ui/Button'

import cls from './Navbar.m.scss'


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
			<Button
				className={cls.button}
				theme='inverted'
				data-testid='navToggle'
				onClick={handleOpen}
				size='xl'
				icon
			>
				{open ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
			</Button>

			<div className={cls.switchers}>
				<ThemeSwitch/>
				<LangSwitch short={!open}/>
			</div>
		</nav>
	)
}
