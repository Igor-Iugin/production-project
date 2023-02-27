import type {FC} from 'react'
import {Page} from 'shared/ui'
import {useTranslation} from 'react-i18next'


const About: FC = () => {
	const {t} = useTranslation('about')
	return (
		<Page>
			{t('О сайте')}
		</Page>
	)
}

export default About
