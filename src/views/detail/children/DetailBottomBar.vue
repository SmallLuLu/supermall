<template>
	<div class="detailBottomBar">
		<div class="doing">
			<div class="doingWrap" 
				v-for="(item,index) in bottotitle" 
				:key="index" @click="titleClick(index)" 
				:class="{active:number==index}">
				<div><i class="iconfont" :class="[item.icon]"></i></div>
				<div>{{item.name}}</div>
			</div>
		</div>
		<div class="addBuyCar" @click="addBuyCar">加入购物车</div>
		<div class="Buy">购买</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				bottotitle:[
					{icon:'icon-kefu',name:'客服'},
					{icon:'icon-dianpu',name:'店铺'},
					{icon:'icon-shoucang',name:'收藏'}
				],
				number:0
			}
		},
		methods:{
			titleClick(index){
				this.number=index
			},
			addBuyCar(){
				this.$emit('addBayCar')
			}
		}
	}
</script>

<style scoped>
	.detailBottomBar{
		position: fixed;
		bottom: 0px;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 49px;
		box-shadow: 1px 0px 10px gray;
	}
	.doing,.addBuyCar,.Buy{
		float: left;
		height: 100%;
		text-align: center;
	}
	.doing{
		width: 50%;
		display: flex;
	}
	.doing div{
		flex: 1;
	}
	.doingWrap div{
		font-size: 14px;
	}
	.doingWrap i{
		font-size: 26px;
	}
	.addBuyCar{
		width: 30%;
		line-height: 49px;
		background-color: #ffe817;
	}
	.Buy{
		width: 20%;
		line-height:49px ;
		background-color: #f69;
		color: #fff;
	}
	.active{
		color: var(--color-tint);
	}
</style>
