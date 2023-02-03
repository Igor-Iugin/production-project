type CNProps = string | Record<string, boolean | string> | string[]


export function clsx(...args: CNProps[]): string {
	if (!args) return null

	let className: string[] = []

	args.forEach(arg => {
		if (Array.isArray(arg)) {
			className = [...className, ...arg]
		} else {
			if (typeof arg === 'string')
				return className.push(arg)

			if (typeof arg === 'object')
				return Object.entries(arg).forEach(item => {
					item[1] && className.push(item[0])
				})
		}
	})

	return className.join(' ')
}