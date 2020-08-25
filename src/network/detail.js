import {ajax} from './ajax.js'

// 详情页面数据加载
export function getDetail(iid){
	return ajax({
		url:'/detail',
		params:{
			iid
		}
	})
}

export class Goods{
	constructor(itemInfo,columns,services) {
		this.title=itemInfo.title;
		this.desc=itemInfo.desc;
		this.newPrice=itemInfo.price;
		this.oldPrice=itemInfo.oldPrice;
		this.discount=itemInfo.discountDesc;
		this.columns=columns;
		this.services=services;
		this.realPrice=itemInfo.lowNowPrice;
	}
}
