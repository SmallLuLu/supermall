import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
