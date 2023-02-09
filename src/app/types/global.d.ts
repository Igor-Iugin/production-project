declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}

	const classNames: IClassNames
	export = classNames
}

declare module '*.svg' {
	import React from 'react'
	const content: React.FC<React.SVGAttributes<SVGElement>>
	export default content
}

declare const __DEV__: boolean