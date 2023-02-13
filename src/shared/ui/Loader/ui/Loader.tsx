import type {FC} from 'react'
import {clsx} from 'shared/lib'

import cls from './Loader.m.scss'


interface LoaderProps {
	className?: string
}

export const Loader: FC<LoaderProps> = ({className}) => {
	return (
		<div className={clsx(cls.loader, className)}>
			<div/>
			<div/>
			<div/>
			<div/>
		</div>
	)
}
