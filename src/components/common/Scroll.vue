<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default{
		props:["probetype","pullupload"],
		data(){
			return{
				scroll:null,
			}
			
		},
		mounted() {
			// 创建BScroll对象,不使用class是因为如果程序中多次调用这个组件，导致不知道你这里调用的是哪一个地方的
			this.scroll=new BScroll(this.$refs.wrapper,{
				click:true,//content中的内容是否允许点击
				probeType:this.probetype,//
				pullUpLoad:this.pullupload//下拉加载
			})
			// Scroll中的监听滚动事件
			this.scroll.on('scroll',(position)=>{
				this.$emit('scroll',position)
			})
			// 监听上拉事件
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullingUp')
			})
		},
		methods:{
		}
	}
</script>

<style scoped>
</style>
