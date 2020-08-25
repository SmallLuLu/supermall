<template>
	<div class="detailShop">
		<div class="shopLogo">
			<img :src="shop.shopLogo">
			<span>{{shop.name}}</span>
		</div>
		<div class="shopInfo clear">
			<div class="shopInfoLeft">
				<ul>
					<li>{{shop.cSells}}</li>
					<li>总销量</li>
				</ul>
				<ul>
					<li>{{shop.cGoods}}</li>
					<li>全部宝贝</li>
				</ul>
			</div>
			<div class="shopInfoRight">
				<div v-for="(sort,index) in shop.score" :key="index" class="clear">
					<span>{{sort.name}}</span>
					<span :class="{textRedColor:sort.isBetter==true,textGreenColor:sort.isBetter==false}">{{sort.score}}</span>
					<span :class="{textRedBg:sort.isBetter==true,textGreenBg:sort.isBetter==false}">{{sort.isBetter==true?"高":"低"}}</span>
				</div>
			</div>
		</div>
		<div class="shopBottom"><a href="" class="shopLink">进店逛逛</a></div>

	</div>
</template>

<script>
	export default {
		props: ["shop"]
	}
</script>

<style scoped>
	.detailShop {
		border-top: 10px solid #eee;
		padding-top: 20px;
	}

	.shopLogo {
		height: 60px;
		padding-left: 10px;
	}

	.shopLogo img {
		float: left;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		margin-right: 10px;
		border: 1px solid #c1c1c1;
	}

	.shopLogo span {
		float: left;
		height: 60px;
		line-height: 60px;
	}

	.shopInfo {
		margin-top: 10px;
	}

	.shopInfoLeft {
		border-right: 2px solid #c1c1c1;
		width: 45%;
		margin-top: 16px;
	}

	.shopInfoRight {
		width: 55%;
	}

	.shopInfoLeft,
	.shopInfoRight {
		float: left;
		text-align: center;
	}

	.shopInfoLeft ul {
		width: 50%;
		float: left;
	}

	.shopInfoLeft ul li {
		line-height: 30px;
		color: black;
	}

	.shopInfoLeft ul li:nth-of-type(1) {
		font-size: 20px;
		font-weight: bold;
	}

	.shopInfoLeft ul li:nth-of-type(2) {
		font-size: 14px;
	}

	.shopInfoRight div {
		font-size: 14px;
		line-height: 26px;
		text-align: center;
		color: #000000;
	}

	.shopInfoRight div span {
		float: left;
		margin-top: 5px;
	}

	.shopInfoRight div span:nth-of-type(1) {
		margin-left: 10%;
	}

	.shopInfoRight div span:nth-of-type(2) {
		display: inline-block;
		width: 20%;
		margin-left: 8%;
		margin-right: 8%;
		text-align: left;
	}

	.textRedColor {
		color: #f13e3a;

	}

	.textRedBg {
		background-color: #f13e3a;
		color: white;
	}

	.textGreenColor {
		color: #5ea732;
	}

	.textGreenBg {
		background-color: #5ea732;
		color: white;
	}

	.shopBottom {
		text-align: center;
		margin-top: 10px;
	}

	.shopLink {
		display: inline-block;
		font-size: 14px;
		background-color: #f2f5f8;
		width: 150px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 10px;
	}
</style>
