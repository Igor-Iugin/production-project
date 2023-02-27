import {lazy} from 'react'


export const HomeAsync = lazy(async () => {
	return await new Promise<any>(resolve => {
		setTimeout(() => {
			resolve(import('./Home'))
		}, 500)
	})
})
