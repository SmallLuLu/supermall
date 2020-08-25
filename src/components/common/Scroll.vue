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
		props:["probetype"],
		data(){
			return{
				scroll:null,
			}
			
		},
		mounted() {
			this.scroll=new BScroll(this.$refs.wrapper,{
				click:true,
				probeType:this.probetype
			})
			this.scroll.on('scroll',(position)=>{
				console.log(position)
			})
		}
	}
</script>

<style scoped>
</style>
