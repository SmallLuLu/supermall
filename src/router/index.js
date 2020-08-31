import Vue from 'vue'
import VueRouter from 'vue-router'

//push 
const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

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
		component: Cart,
		beforEnter:(to,from,next)=>{
			console.log(to);
			console.log(from);
			next()
		}
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
router.beforeEach((to,from,next)=>{
	if(to.path=='/cart'||to.path=='/profile'){
		let userCookie= localStorage.getItem('userCookie');
		if(userCookie==null){
			alert('请先登录');
			next()
		}else{
			next()
		}
	}else{
		next()
	}
	
})
export default router
