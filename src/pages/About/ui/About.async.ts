import {lazy} from 'react'


export const AboutAsync = lazy(async () => await new Promise<any>(resolve => {
	setTimeout(() => {
		resolve(import('./About'))
	}, 1500)
}))
