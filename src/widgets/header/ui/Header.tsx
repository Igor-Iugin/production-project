import type {FC} from 'react'
import {clsx} from 'shared/lib'

import cls from './Header.m.scss'
import {AppLink} from 'shared/ui'


interface NavbarProps {
	className?: string
}

export const Header: FC<NavbarProps> = ({className}) => {
	return (
		<header className={clsx(cls.root, className)}>
			<nav className={cls.nav}>
				<ul>
					<li><AppLink to={'home'}>Главная</AppLink></li>
					<li><AppLink to={'about'}>Инфо</AppLink></li>
				</ul>
			</nav>
		</header>
	)
}
