<template>
	<div class="recommendWrap">
		<div v-for="(item,index) in inner" :key="index">
			<a :href="item.link">
				<img :src="item.image" :alt="item.image">
			</a>
			<p>{{item.title}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		props:['inner']
	}
</script>

<style>
	.recommendWrap{
		padding: 20px 0px;
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 12px;
		border-bottom: 8px solid #eee;
	}
	.recommendWrap div{
		flex: 1;
	}
	.recommendWrap img{
		width: 80px;
		height: 80px;
	}
	.recommendWrap p{
		margin-top:10px ;
	}
</style>
