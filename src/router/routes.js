const Layout = () => import('components/layout/index.vue')
const User = () => import('views/user/index.vue')
const Role = () => import('views/user/role.vue')
const Home = () => import('views/home/index.vue')
const About = () => import('views/about/index.vue')

export default [
	{
		path: '/user',
		name: 'user',
		redirect: '/user/index',
		component: Layout,
		meta: {
			title: '用户管理',
			hidden: false
		},
		children: [
			{
				path: 'index',
				name: 'user-index',
				meta: {
					title: '用户管理',
					hidden: false
				},
				component: User
			}
		]
	}
]