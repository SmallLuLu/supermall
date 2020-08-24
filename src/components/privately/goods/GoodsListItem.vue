<template>
	<div class="goodItem">
		<img :src="goodItem.show.img" :alt="goodItem.title">
		<div class="goods-info">
			<p>{{goodItem.title}}</p>
			<span class="price">¥{{goodItem.price}}</span>
			<span class="collect">{{goodItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["goodItem"],
	}
</script>

<style scoped>
	.goodItem {
		width: 48%;
		text-align: center;
		font-size: 12px;
		margin-bottom: 10px;
	}

	.goodItem img {
		width: 100%;
		border-radius: 5px;
	}

	.goods-info {
		width: 100%;
	}

	.goods-info p {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 3px;
	}

	.goods-info .price {
		color: var(--color-high-text);
		margin-right: 20px;
	}

	.goods-info .collect {
		position: relative;
	}

	.goods-info .collect::before {
		content: '';
		position: absolute;
		left: -15px;
		top: 0;
		width: 14px;
		height: 14px;
		background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
	}
</style>
