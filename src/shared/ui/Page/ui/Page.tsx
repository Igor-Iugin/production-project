import {FC, ReactNode} from 'react'
import {clsx} from 'shared/lib'

import cls from './Page.m.scss'


interface PageProps {
	className?: string
	children: ReactNode
}

export const Page: FC<PageProps> = ({className, children}) => {
	return (
		<main className={clsx(cls.root, className)}>
			{children}
		</main>
	)
}