import {fireEvent, screen} from '@testing-library/react'
import {Navbar} from './Navbar'
import {renderComponent} from 'shared/lib/tests'


describe('Navbar', () => {
	test('Render', () => {
		renderComponent(<Navbar data-testid='navbar'/>)
		expect(screen.getByTestId('navbar')).toBeInTheDocument()
	})
	test('Collapsing', () => {
		renderComponent(<Navbar data-testid='navbar'/>)
		const navbar = screen.getByTestId('navbar')
		const toggleBtn = screen.getByTestId('navToggle')
		expect(navbar).toBeInTheDocument()
		fireEvent.click(toggleBtn)
		expect(navbar).toHaveClass('open')
	})
})
