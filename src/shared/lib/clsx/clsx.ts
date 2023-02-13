type CNProps = string | Record<string, boolean | string> | string[] | undefined


export function clsx(...args: CNProps[]): string | undefined {
	if (!args) return undefined

	let className: string[] = []

	args.forEach(arg => {
		if (Array.isArray(arg)) {
			className = [...className, ...arg]
		} else {
			if (typeof arg === 'string') {
				return className.push(arg)
			}

			if (typeof arg === 'object') {
				Object.entries(arg).forEach(item => {
					item[1] && className.push(item[0])
				})
			}
		}
	})

	return className.join(' ')
}
