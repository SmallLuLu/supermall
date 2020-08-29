<template>
	<div class="userAccount">
		<div>
			<p><span>{{money}}</span>元</p>
			<p>我的余额</p>
		</div>
		<div class="center">
			<p><span>{{coupon}}</span>个</p>
			<p>我的优惠</p>
		</div>
		<div>
			<p><span>{{integral}}</span>分</p>
			<p>我的积分</p>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			money:{
				type:String,
				default:'0.00'
			},
			integral:{
				type:String,
				default:'0'
			},
			coupon:{
				type:String,
				default:'0'
			}
		}
	}
</script>

<style scoped>
	.userAccount{
		display: flex;
		height: 83px;
	}
	.userAccount div{
		flex: 1;
		text-align: center;
		padding: 18px;
	}
	.center{
		border-left: 1px solid #e1e1e1;
		border-right: 1px solid #e1e1e1;
	}
	.userAccount div p{
		font-size: 14px;
		
	}
	.userAccount div p:nth-of-type(2){
		margin-top: 6px;
	}
	.userAccount div span{
		color: var(--color-tint);
		font-weight: bold;
		font-size: 24px;
	}
</style>
