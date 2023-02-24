import type {ErrorInfo, ReactNode} from 'react'
import {Suspense, Component} from 'react'
import {PageError} from 'widgets/page-error'


interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = {hasError: false}
	}

	// eslint-disable-next-line n/handle-callback-err
	static getDerivedStateFromError(error: Error) {
		return {hasError: true}
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		const {hasError} = this.state
		const {children} = this.props

		if (hasError) {
			return <Suspense fallback=''><PageError/></Suspense>
		}

		return children
	}
}

