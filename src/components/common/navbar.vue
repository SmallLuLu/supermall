<template>
	<div class="navbarWrap ignore">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.navbarWrap{
		display: flex;
		height: 44px;
		text-align: center;
		line-height: 44px;
		box-shadow: 0px 1px 1px rgba(100,100,100,.1) ;
		z-index: 9;
	}
	.left,.right{
		width: 60px;
	}
	.center{
		flex: 1;
	}
</style>
