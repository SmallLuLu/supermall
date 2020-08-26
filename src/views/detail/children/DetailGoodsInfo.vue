<template>
	<div class="detailGoodsInfo" v-if="Object.keys(detailgoodinfo).length!==0">
		<div class="goodsInfoDesc">
			<div class="start"></div>
			<div class="desc">{{detailgoodinfo.desc}}</div>
			<div class="end"></div>
		</div>
		<div class="goodsInfoKey">{{detailgoodinfo.detailImage[0].key}}</div>
		<div class="goodInfoList">
			<img :src="image" alt="" v-for="(image,index) in detailgoodinfo.detailImage[0].list" :key="index" @load="detailImageLoad">
		</div>
	</div>
</template>

<script>
	export default {
		props: ["detailgoodinfo"],
		methods:{
			detailImageLoad(){
				this.$emit('detailImageLoad')
			}
		}
	}
</script>

<style scoped>
	.goodsInfoDesc {
		padding: 20px 15px;

	}

	.desc {
		padding: 15px 0;
		font-size: 14px;
	}

	.start,.end {
		width: 90px;
		height: 1px;
		background-color: #a3a3a5;
		position: relative;
	}
	.start::before,.end::after{
		content: '';
		position: absolute;
		width: 5px;
		height: 5px;
		background-color: #333;
		bottom: 0;
	}
	.end{
		float: right;
	}
	.end::after{
		right: 0;
	}
	
	.goodsInfoKey {
		font-size: 16px;
		text-indent: 1rem;
		margin: 10px 0px;
		color: #000000;
	}

	.goodInfoList img {
		width: 100%;
	}
</style>
