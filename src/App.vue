<template>
	<div id="app">
		<keep-alive exclude="Detail">
			<router-view></router-view>
		</keep-alive>
		<tabbar :tabbardata="tabbarData"></tabbar>
	</div>
</template>

<script>
	import tabbar from 'components/common/tabbar.vue'
	export default {
		components: {
			tabbar
		},
		data() {
			return {
				tabbarData: [{
						iconClass: 'icon-yemian-copy-copy',
						pFont: '首页',
						url:'/home'
					},
					{
						iconClass: 'icon-fen_lei2',
						pFont: '分类',
						url:'/category'
					},
					{
						iconClass: 'icon-gouwuche',
						pFont: '购物车',
						url:'/cart'
					},
					{
						iconClass: 'icon-A',
						pFont: '我的',
						url:'/profile'
					}
				]
			}
		}
	}
</script>

<style>
	@import "assets/css/base.css";
	.router-link-active{
		color: red ;
	}
</style>
