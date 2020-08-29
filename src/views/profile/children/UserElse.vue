<template>
	<div class="userElse">
		<router-link :to="item.url" v-for="(item,index) in info" :key="index">
			<div class="clear">
				<i class="iconfont" :class="item.icon"></i>
				<span>{{item.text}}</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		props:["info"]
	}
</script>

<style scoped>
	.userElse{
		border-top: 12px solid #f2f2f2;
	}
	.userElse div{
		height: 45px;
		line-height: 45px;
		width: 100vw;
	}
	.userElse i{
		float: left;
		text-align: center;
		width: 50px;
		font-size: 24px;
		color:var(--color-tint) ;
	}
	.userElse span{
		float: left;
		width: calc(100vw - 50px);
		border-bottom: 1px solid #F2F2F2;
		font-size: 16px;
		color: black;
	}
	.userElse a:last-of-type span{
		border: none;
	}
</style>
