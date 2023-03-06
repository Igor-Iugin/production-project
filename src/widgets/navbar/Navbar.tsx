import type {FC} from 'react'
import {useState} from 'react'
import {clsx, RouterPath} from 'shared/lib'
import {ThemeSwitch} from 'features/theme-switch'
import {LangSwitch} from 'features/lang-switch'
import {ChevronLeftIcon, ChevronRightIcon, HomeIcon, ReaderIcon} from '@radix-ui/react-icons'
import {Button} from 'shared/ui/Button'
import {AppLink} from 'shared/ui'
import {useTranslation} from 'react-i18next'

import cls from './Navbar.m.scss'


interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({className, ...rest}) => {
	const [open, setOpen] = useState(false)
	const {t} = useTranslation()

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

			<ul className={clsx(cls.nav, {[cls.open]: open})}>
				<li>
					<AppLink to={RouterPath.home}>
						<HomeIcon/>
						<span>{t('Главная')}</span>
					</AppLink>
				</li>
				<li>
					<AppLink to={RouterPath.about}>
						<ReaderIcon/>
						<span>{t('Инфо')}</span>
					</AppLink>
				</li>
			</ul>

			<div className={cls.switchers}>
				<ThemeSwitch/>
				<LangSwitch short={!open}/>
			</div>
		</nav>
	)
}
