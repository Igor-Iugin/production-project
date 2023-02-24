import type {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui'

import cls from './PageError.m.scss'
import {clsx} from 'shared/lib'


export const PageError: FC = () => {
	const {t} = useTranslation()
	const reloadPage = () => {
		location.reload()
	}
	return (
		<div className={clsx(cls.root)}>
			<h1>{t('Непредвиденная ошибка')}</h1>
			<Button onClick={reloadPage}>{t('Перезагрузить страницу')}</Button>
		</div>
	)
}
