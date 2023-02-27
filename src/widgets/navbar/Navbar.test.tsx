import {fireEvent, screen} from '@testing-library/react'
import {Navbar} from './Navbar'
import {renderI18n} from 'shared/lib/tests/renderI18n'


describe('Navbar', () => {
	test('Render', () => {
		renderI18n(<Navbar data-testid='navbar'/>)
		expect(screen.getByTestId('navbar')).toBeInTheDocument()
	})
	test('Collapsing', () => {
		renderI18n(<Navbar data-testid='navbar'/>)
		const navbar = screen.getByTestId('navbar')
		const toggleBtn = screen.getByTestId('navToggle')
		expect(navbar).toBeInTheDocument()
		fireEvent.click(toggleBtn)
		expect(navbar).toHaveClass('open')
	})
})
