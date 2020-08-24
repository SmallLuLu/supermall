<template>
	<div class="category">
		<ul>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
			<li>我是分类</li>
		</ul>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				scroll:null
			}
		},
		mounted() {
			this.scroll=new BScroll(document.querySelector(".category"),{
				probeType:3,
				pullUpLoad:true
			})
			// this.scroll.on('scroll',(position)=>{
			// 	// console.log(position)
			// })
			this.scroll.on('pullingUp',()=>{
				console.log('上拉加载更多')
			})
		}
	}
</script>

<style scoped>
	.category{
		height: 300px;
		background: red;
	}
</style>
