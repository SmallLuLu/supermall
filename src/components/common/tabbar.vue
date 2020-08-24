<template>
	<div class="tabbarWrap">
		<router-link v-for="(tabbar,index) in tabbardata" :key="index" tag="div" :to="tabbar.url">
			<i class="iconfont" :class="[tabbar.iconClass]"></i>
			<p>{{tabbar.pFont}}</p>
		</router-link>
	</div>
</template>

<script>
	export default {
		props: ['tabbardata']
	};
</script>

<style scoped>
	.tabbarWrap {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		height: 49px;
		display: flex;
		box-shadow: 0px -1px 1px rgba(150,150,150,.08);
		background: #f6f6f6;
	}
	.tabbarWrap div{
		flex: 1;
		text-align: center;
		padding-top: 5px;
	}
	.tabbarWrap i{
		font-size: 24px;
	}
	.tabbarWrap p{
		font-size: 12px;
		font-weight: bold;
		margin-top: 3px;
	}
</style>
