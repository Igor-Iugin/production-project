import type {FC} from 'react'
import {useState} from 'react'
import {clsx} from 'shared/lib'
import {Button} from 'shared/ui'
import {ThemeSwitch} from 'features/theme-switch'

import cls from './Navbar.m.scss'
import {LangSwitch} from 'features/lang-switch'
import {useTranslation} from 'react-i18next'


interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({className, ...rest}) => {
	const {t} = useTranslation()
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(prev => !prev)
	}

	return (
		<nav className={clsx(cls.root, className, {[cls.open]: open})} {...rest}>
			<Button data-testid='navToggle' onClick={handleOpen}>{t('Переключить меню')}</Button>

			<div className={cls.switchers}>
				<ThemeSwitch/>
				<LangSwitch/>
			</div>
		</nav>
	)
}
