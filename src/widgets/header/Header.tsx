import type {FC} from 'react'
import {clsx} from 'shared/lib'

import cls from './Header.m.scss'
import {AppLink} from 'shared/ui'
import {useTranslation} from 'react-i18next'


interface NavbarProps {
	className?: string
}

export const Header: FC<NavbarProps> = ({className}) => {
	const {t} = useTranslation()
	return (
		<header className={clsx(cls.root, className)}>
			<nav className={cls.nav}>
				<ul>
					<li><AppLink to={'home'}>{t('Главная')}</AppLink></li>
					<li><AppLink to={'about'}>{t('Инфо')}</AppLink></li>
				</ul>
			</nav>
		</header>
	)
}
