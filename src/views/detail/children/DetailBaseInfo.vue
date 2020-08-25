<template>
	<div class="detailBaseInfo" v-if="Object.keys(goods).length !==0">
		<div class="infoTitle">{{goods.title}}</div>
		<div class="infoPrice">
			<span class="nPrice">{{goods.newPrice}}</span>
			<span class="oPrice">{{goods.oldPrice}}</span>
			<span>{{goods.discount}}</span>
		</div>
		<div class="infoOther">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="infoService">
			<span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
				<img :src="goods.services[index-1].icon">
				<span>{{goods.services[index-1].name}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["goods"]
	}
</script>

<style scoped>
	.detailBaseInfo{
		width: 94%;
		margin-left: 3%;
	}
	.infoTitle {
		color: black;
		font-size: 14px;
		text-align: center;
		margin-top: 10px;
	}

	.infoPrice {
		position: relative;
		width: 100%;
		height: 30px;
		margin-top: 10px;
		margin-bottom: 20px;
	}

	.infoPrice span:nth-of-type(1) {
		color: var(--color-tint);
		font-size: 22px;
		line-height: 28px;
	}

	.infoPrice span:nth-of-type(2) {
		color: #c1c1c1;
		text-decoration: line-through;
		margin-left: 5px;
	}

	.infoPrice span:nth-of-type(3) {
		position: absolute;
		top: 0;
		display: inline-block;
		font-size: 12px;
		width: 60px;
		height: 14px;
		margin-left: 5px;
		background-color: var(--color-tint);
		text-align: center;
		color: white;
		line-height: 14px;
		border-radius: 10px;
	}

	.infoOther {
		width: 96%;
		margin-left: 2%;
		height: 20px;
		border-bottom: 1px solid #c1c1c1;
		display: flex;
		font-size: 13px;
		color: #999999;
	}

	.infoOther span {
		flex: 1;
	}

	.infoOther span:nth-of-type(2) {
		text-align: center;
	}

	.infoOther span:nth-of-type(3) {
		text-align: right;
	}

	.infoService {
		display: flex;
		justify-content: space-between;
		line-height: 60px;
	}

	.info-service-item img {
		width: 14px;
		height: 14px;
		position: relative;
		top: 2px;
	}

	.info-service-item span {
		font-size: 13px;
		color: #333;
	}
</style>
