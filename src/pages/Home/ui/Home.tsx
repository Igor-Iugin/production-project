import React from 'react'
import {Page} from 'shared/ui'
import {useTranslation} from 'react-i18next'


const Home = () => {
	const {t} = useTranslation()
	return (
		<Page>
			{t('Главная страница')}
		</Page>
	)
}

export default Home
