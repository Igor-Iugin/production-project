import {FC} from 'react'
import {clsx} from 'shared/lib'

import cls from './Page.m.scss'


interface PageProps {
	className?: string
}

export const Page: FC<PageProps> = ({className}) => {
	return (
		<div className={clsx(cls.root, className)}>
		</div>
	)
}