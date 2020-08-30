<template>
	<div class="cart">
		<!-- NavBar -->
		<NavBar class="cartNavBar">
			<template v-slot:center>
				<div>购物车({{$store.state.buyCar.iid.length}})</div>
			</template>
		</NavBar>
		<!-- 购物车的商品 -->
		<Scroll class="cartScrollContent" ref="scroll" :probetype="3" >
			<CartShopInfo v-for="item in $store.state.buyCar.info" :key="item.iid" :item="item" @allNumber="allNumberC" @allMoney="allMoneyC" :ref="item.iid"></CartShopInfo>
		</Scroll>
		<!-- 购物车商品核算 -->
		<div class="cartSlove">
			<div @click="allCheck" ><i class="iconfont icon-xuanzhong" :class="{active:active==true}"></i>全选</div>
			<div>合计:￥{{allMoney}}</div>
			<div>去计算({{allNumber}})</div>
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
				active:false,
				allNumber:0,
				allMoney:0,
				fatherChecked:true
			}
		},
		methods:{
			allCheck(){
				this.active=!this.active;
				this.$store.state.buyCar.iid.forEach((a)=>{
					this.$refs[a][0].active=this.active;
				})
				if(this.active==false){
					this.allNumber=0;
					this.allMoney=0
				}else{
					this.allNumber=this.$store.state.buyCar.iid.length;
					let money=0;
					for(let i=0;i<this.$store.state.buyCar.info.length;i++){
						console.log()
						money+=parseFloat(this.$store.state.buyCar.info[i].price.substring(1, 6))*this.$store.state.buyCar.info[i].cont
					}
					this.allMoney=money;
				}
			},
			allNumberC(number){
				this.allNumber+=number
				if(this.allNumber==this.$store.state.buyCar.iid.length){
					this.active=true
				}else{
					this.active=false
				}
			},
			allMoneyC(money){
				this.allMoney+=money
			}
		},
		watch:{
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
