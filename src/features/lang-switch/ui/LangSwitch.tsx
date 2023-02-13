import type {ButtonHTMLAttributes, FC} from 'react'
import {Button} from 'shared/ui'
import {useTranslation} from 'react-i18next'


interface LangSwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const LangSwitch: FC<LangSwitchProps> = ({className, ...rest}) => {
	const {t, i18n} = useTranslation()

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}
	return (
		<Button onClick={toggle} {...rest}>
			{t('Язык')}
		</Button>
	)
}
