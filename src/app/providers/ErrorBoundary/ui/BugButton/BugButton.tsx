import type {FC} from 'react'
import {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui'


export const BugButton: FC = () => {
	const {t} = useTranslation('dev')
	const [error, setError] = useState(false)

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])

	const onThrow = () => {
		setError(prev => !prev)
	}
	return (
		<Button onClick={onThrow}>{t('Вызвать баг')}</Button>
	)
}
