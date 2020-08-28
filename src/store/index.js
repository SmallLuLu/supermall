import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		buyCar:{
			iid:[],
			info:[]
		},//存储购物车数据
		buyCarMoney:0,//合计钱数
		buyNumber:0,//去计算数量
		allCheck:false,//购物车全选
	},
	mutations: {
		// 存储购物车数据
		addBuyCar(state,shopObject){
			if(state.buyCar.iid.length==0){
				state.buyCar.iid.push(shopObject.iid);
				state.buyCar.info.push(shopObject);
			}else{
				let index=state.buyCar.iid.indexOf(shopObject.iid)
				if(index==-1){
					state.buyCar.iid.push(shopObject.iid);
					state.buyCar.info.push(shopObject);
				}else{
					state.buyCar.info[index].cont++
				}
			}
		},
	},
	actions: {},
	modules: {}
})
