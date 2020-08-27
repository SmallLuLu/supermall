<template>
	<div class="cart">
		<!-- NavBar -->
		<NavBar class="cartNavBar">
			<template v-slot:center>
				<div>购物车({{$store.state.buyCar.iid.length}})</div>
			</template>
		</NavBar>
		<Scroll class="cartScrollContent" ref="scroll" :probetype="3" >
			<CartShopInfo v-for="item in $store.state.buyCar.info" :key="item.iid" :item="item"></CartShopInfo>
		</Scroll>
		<div class="cartSlove">
			<div @click="allCheck" ><i class="iconfont icon-xuanzhong" :class="{active:active==true}"></i>全选</div>
			<div>合计:￥{{$store.state.buyCarMoney}}</div>
			<div>去计算({{$store.state.buyNumber}})</div>
		</div>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar.vue'
	import Scroll from '../../components/common/Scroll.vue'
	
	import CartShopInfo from './children/CartShopInfo.vue'
	
	export default{
		components:{
			NavBar,
			Scroll,
			CartShopInfo
		},
		data(){
			return{
				active:false
			}
		},
		methods:{
			allCheck(){
				this.active=!this.active;
				this.$store.commit('allCheck',this.active);
			}
		}
	}
</script>

<style scoped>
	.cart{
		height: 100vh;
	}
	.cartNavBar{
		background-color: var(--color-tint);
		color: #FFFFFF;
	}
	.cartScrollContent{
		height: -webkit-calc(100% - 133px);
		overflow-y:hidden ;
	}
	.cartSlove{
		width: 100%;
		height: 40px;
		background-color: #EEEEEE;
		position: fixed;
		bottom: 49px;
		left: 0;
		display: flex;
	}
	.cartSlove div{
		flex: 1;
		line-height: 40px;
		font-size: 14px;
	}
	.cartSlove div i{
		font-size: 20px;
	}
	.cartSlove div:nth-of-type(3){
		background-color: orangered;
		color: white;
		text-align: center;
	}
	.active{
		color: #FF0000;
	}
</style>
