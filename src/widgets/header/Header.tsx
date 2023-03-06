import type {FC} from 'react'
import {clsx} from 'shared/lib'

import cls from './Header.m.scss'


interface NavbarProps {
	className?: string
}

export const Header: FC<NavbarProps> = ({className}) => {
	return (
		<header className={clsx(cls.root, className)}>

		</header>
	)
}
