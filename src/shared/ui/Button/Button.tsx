import type {ButtonHTMLAttributes, FC} from 'react'
import {clsx} from 'shared/lib'

import cls from './Button.m.scss'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: 'primary' | 'clear' | 'outline' | 'inverted'
	size?: 's' | 'm' | 'xl'
	icon?: boolean
}

export const Button: FC<ButtonProps> = ({
	className,
	theme = 'primary',
	size = 'm',
	icon,
	children,
	...rest
}) => {
	return (
		<button
			className={clsx(cls.root, className, cls[theme], cls[`size-${size}`], {[cls.icon]: icon})}
			type='button'
			{...rest}
		>
			{children}
		</button>
	)
}
