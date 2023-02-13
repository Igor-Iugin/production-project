import {clsx} from './clsx'


describe('clsx', () => {
	test('Only 1st param', () => {
		expect(clsx('some')).toBe('some')
	})

	test('With classes in array', () => {
		const expected = 'some someClass testClass'
		expect(clsx('some', ['someClass', 'testClass'])).toBe(expected)
	})

	test('With conditional classes', () => {
		const expected = 'some hover'
		expect(clsx('some', {hover: true, scroll: false, cUndefined: undefined})).toBe(expected)
	})

	test('With trash types in conditional classes', () => {
		const expected = 'some hover'
		expect(clsx('some', {hover: 'string', scroll: 0, cUndefined: null})).toBe(expected)
	})

	test('With all types classes', () => {
		const expected = 'some hover scroll modeClass'
		expect(clsx('some', {hover: true, scroll: true}, ['modeClass'])).toBe(expected)
	})
})
