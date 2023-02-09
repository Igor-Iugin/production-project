import React from 'react'
import {Page} from 'shared/ui'
import {useTranslation} from 'react-i18next'


const About = () => {
	const {t} = useTranslation('about')
	return (
		<Page>
			{t('О сайте')}
		</Page>
	)
}

export default About