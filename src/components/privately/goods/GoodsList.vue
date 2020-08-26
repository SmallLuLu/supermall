<template>
	<div class="good">
		<GoodsListItem v-for="(gooditem,index) in goodsList.list" :key="index" :goodItem="gooditem"></GoodsListItem>
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	export default{
		components:{
			GoodsListItem
		},
		props:["goodsList"],
		
		
	}
</script>

<style scoped>
	.good{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
