import {render, screen} from '@testing-library/react'
import {Button} from './Button'


describe('Button', () => {
	test('Only 1st param', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})
})
