import type {FC} from 'react'
import type {AppRoutes} from 'shared/lib'
import {clsx, RouterPath} from 'shared/lib'
import type {LinkProps} from 'react-router-dom'
import {Link} from 'react-router-dom'

import cls from './AppLink.m.scss'


type AppLinkTheme = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
	className?: string
	to: AppRoutes
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {className, to, children, theme = 'primary', ...rest} = props

	return (
		<Link to={RouterPath[to]} className={clsx(cls.root, className, cls[theme])} {...rest}>
			{children}
		</Link>
	)
}
