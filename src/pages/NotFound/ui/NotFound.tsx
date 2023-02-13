import type {FC} from 'react'
import {clsx} from 'shared/lib'

import cls from './NotFound.m.scss'
import {Page} from 'shared/ui'
import {useTranslation} from 'react-i18next'


interface NotFoundProps {
	className?: string
}

export const NotFound: FC<NotFoundProps> = ({className}) => {
	const {t} = useTranslation()
	return (
		<Page className={clsx(cls.root, className)}>
			{t('Страница не найдена')}
		</Page>
	)
}
