import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: 'home'
	},
	{
		path: '/home',
		name:'Home',
		component: Home
	},
	{
		path: '/category',
		name:'category',
		component: Category
	},
	{
		path: '/profile',
		name:'profile',
		component: Profile
	},
	{
		path: '/cart',
		name:'Cart',
		component: Cart
	},
	{
		path:'/detail/:id',
		name:'Detail',
		component:Detail
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
