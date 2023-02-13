declare module '*.scss' {
	type IClassNames = Record<string, string>

	const classNames: IClassNames
	export = classNames
}

declare module '*.svg' {
	import type React from 'react'
	const content: React.FC<React.SVGAttributes<SVGElement>>
	export default content
}

declare const _DEV_: boolean
