import {FC} from 'react'
import {clsx} from 'shared/lib'

import cls from './Navbar.module.scss'
import {AppLink} from 'shared/ui'


interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
	const {className} = props

	return (
		<nav className={clsx(cls.root, className)}>
			<ul>
				<li><AppLink to={'home'}>Главная</AppLink></li>
				<li><AppLink to={'about'}>Инфо</AppLink></li>
			</ul>
		</nav>
	)
}