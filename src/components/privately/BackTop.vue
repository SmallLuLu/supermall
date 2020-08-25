<template>
	<div class="backTop" v-show="show==true">
		<i class="iconfont icon-huidaodingbu"></i>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:false
			}
		}
	}
</script>

<style scoped>
	.backTop{
		position: fixed;
		right: 10px;
		bottom: 80px;
		z-index: 9;
		background: white;
		border-radius: 50% 50%;
	}
	.backTop i{
		font-size: 40px;
		line-height: 40px;
		color: var(--color-tint);
	}
</style>
