export type AppRoutes = 'home' | 'about' | 'notFound'

export const RouterPath: Record<AppRoutes, string> = {
	home: '/',
	about: '/about',
	notFound: '*'
}
