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

// 详情热门推荐
export function getRecommend(){
	return ajax({
		url:'/recommend'
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

export class GoodsParam{
	constructor(info,rule){
		// image可能没有值，某些商品有值，某些没有值
		this.image=info.images ? info.images[0]:'';
		this.infos=info.set;
		this.sizes=rule.tables;
	}
}
