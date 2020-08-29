<template>
	<div class="tabMenu">
		<Scroll class="tabMenuScroll">
			<div v-for="(item,index) in tabmenus" :key="index" @click="menuClick(index,item.maitKey)" :class="{active:menuActive==index}">{{item.title}}</div>
		</Scroll>
	</div>
</template>

<script>
	import Scroll from '../../../components/common/Scroll.vue'
	export default{
		components:{
			Scroll
		},
		props:["tabmenus"],
		data(){
			return{
				menuActive:0
			}
		},
		methods:{
			menuClick(index,maitKey){
				this.menuActive=index;
				this.$emit('tabMenuChange',maitKey)
			}
		}
	}
</script>

<style scoped>
	.tabMenu{
		position: absolute;
		left: 0;
		top: 0px;
		background-color: #f6f6f6;
		height: 100%;
		width: 100px;
	}
	.tabMenuScroll{
		height: 100%;
	}
	.tabMenuScroll div{
		height: 45px;
		line-height: 45px;
		text-align: center;
		font-size: 14px;
	}
	.active{
		color: var(--color-high-text);
		font-weight: bolder !important;
		border-left:3px solid var(--color-high-text) ;
		background-color: #FFFFFF;
	}
</style>
