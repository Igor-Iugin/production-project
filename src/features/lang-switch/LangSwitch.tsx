import type {ButtonHTMLAttributes, FC} from 'react'
import {Button} from 'shared/ui'
import {useTranslation} from 'react-i18next'


interface LangSwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	short?: boolean
}

export const LangSwitch: FC<LangSwitchProps> = ({className, short, ...rest}) => {
	const {t, i18n} = useTranslation()

	const toggle = async () => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button theme='clear' onClick={toggle} {...rest}>
			{t(short ? 'Короткий язык' : 'Язык')}
		</Button>
	)
}
