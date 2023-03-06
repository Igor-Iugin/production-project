import type {FC} from 'react'
import {clsx} from 'shared/lib'
import type {LinkProps} from 'react-router-dom'
import {Link} from 'react-router-dom'

import cls from './AppLink.m.scss'


type AppLinkTheme = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
	className?: string
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({className, children, theme = 'primary', ...rest}) => {
	return (
		<Link className={clsx(cls.root, className, cls[theme])} {...rest}>
			{children}
		</Link>
	)
}
