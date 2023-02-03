import React, {useState} from 'react'
import css from './Counter.m.scss'
import {clsx} from '../helpers/clsx/clsx'


export const Counter = () => {
	const [count, setCount] = useState(49)

	const increment = () => {
		setCount(count + 1)
	}

	return (
		<div className={clsx(css.button)}>
			<h1>{count}</h1>
			<button onClick={increment}>Increment</button>
		</div>
	)
}