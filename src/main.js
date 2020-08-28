import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// 引入轮播图
Vue.use(VueAwesomeSwiper)
// 使用element ui
Vue.use(ElementUI);
// 使用fastclick
FastClick.attach(document.body)
// 使用图片懒加载
Vue.use(VueLazyLoad,{
	loading:require('./assets/img/common/placeholder.png')
})

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
