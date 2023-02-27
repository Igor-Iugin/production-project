import type {FC} from 'react'
import {clsx} from 'shared/lib'

import cls from './PageLoader.m.scss'
import {Page} from 'shared/ui'
import {Loader} from 'shared/ui/Loader'


interface NavbarProps {
	className?: string
}

export const PageLoader: FC<NavbarProps> = ({className}) => {
	return (
		<Page className={clsx(cls.root, className)}>
			<Loader/>
		</Page>
	)
}
