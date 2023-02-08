import {ButtonHTMLAttributes, FC} from 'react'
import {clsx} from 'shared/lib'

import cls from './Button.m.scss'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: 'clear'
}

export const Button: FC<ButtonProps> = ({
	className,
	theme = 'clear',
	children,
	...rest
}) => {
	return (
		<button className={clsx(cls.root, className, cls[theme])} {...rest}>
			{children}
		</button>
	)
}