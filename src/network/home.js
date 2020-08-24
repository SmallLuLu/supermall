import {ajax} from './ajax.js';

export function getHomeMultidata(){
	return ajax({
		url:'/home/multidata'
	})
}
export function getHomeGoods(type,page){
	return ajax({
		url:'/home/data',
		params:{
			type:type,
			page:page
		}
	})
}