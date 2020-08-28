<template>
	<div class="carShopWrap clear">
		<i class="iconfont icon-xuanzhong" @click="shopCheck(item.price,item.cont)" :class="{active:active==true}"></i>
		<img :src="item.image" alt="">
		<div class="cartShopText">
			<div class="shopTitle">{{item.title}}</div>
			<div class="shopDesc">{{item.desc}}</div>
			<div>
				<span class="shopPrice">{{item.price}}</span>
				<span class="shopCont">X{{item.cont}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["item"],
		data() {
			return {
				active: false,
			}
		},
		methods: {
			shopCheck(money, number) {
				let numMonry = parseFloat(money.substring(1, 6)) * number
				this.active = !this.active
				if (this.active == true) {
					this.$emit("allNumber",1);
					this.$emit("allMoney",numMonry);
				} else {
					this.$emit("allNumber",-1);
					this.$emit("allMoney",-numMonry)
				}
			}
		},
		watch: {
		}
	}
</script>

<style scoped>
	.carShopWrap {
		height: 130px;
		width: 100%;

		border-bottom: 1px solid #c1c1c1;
		text-align: center;
	}

	.carShopWrap img {
		width: 80px;
		margin-top: 15px;
		height: 100px;
		line-height: 130px;
		border-radius: 5px;
	}

	.carShopWrap i {
		width: 10%;
		font-size: 20px;
		line-height: 130px;
	}

	.carShopWrap img,
	.carShopWrap i,
	.cartShopText {
		float: left;
	}

	.cartShopText {
		width: 60%;
		height: 100%;
		padding: 15px 10px;
	}

	.cartShopText div {
		height: 36px;
		line-height: 36px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 14px;
	}

	.shopTitle {
		color: #000000;
	}

	.shopDesc {
		color: #C1C1C1;
	}

	.shopPrice {
		float: left;
		color: #FF0000;
	}

	.shopCont {
		float: right;
	}

	.active {
		color: #FF0000;
	}
</style>
