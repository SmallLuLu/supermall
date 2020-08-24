import {ajax} from './ajax.js';

export function getHomeMultidata(){
	return ajax({
		url:'/home/multidata'
	})
}