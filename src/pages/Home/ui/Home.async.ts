import {lazy} from 'react'


export const HomeAsync = lazy(() => new Promise(resolve => {
	//@ts-ignore
	setTimeout(() => resolve(import('./Home')), 1500)
}))