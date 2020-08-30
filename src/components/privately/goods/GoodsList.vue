<template>
	<div class="good">
		<GoodsListItem v-for="(gooditem,index) in porpGoodsList" :key="index" :goodItem="gooditem"></GoodsListItem>
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	export default{
		components:{
			GoodsListItem
		},
		props:["goodsList"],
		computed:{
			porpGoodsList(){
				return this.goodsList.list?this.goodsList.list:this.goodsList

			}
		}
		
	}
</script>

<style scoped>
	.good{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
