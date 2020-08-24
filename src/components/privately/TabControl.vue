<template>
	<div class="tabcontrol">
		<div v-for="(text,index) in title" :key="index">
			<span :class="{active:number==index}" @click="tabactive(index)">{{text}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:['title'],
		data(){
			return{
				number:0
			}
		},
		methods:{
			tabactive(number){
				this.number=number;
				this.$emit('tabClick',number);
			}
		}
	}
</script>

<style scoped>
	.tabcontrol{
		width: 100%;
		height: 40px;
		display: flex;
		text-align: center;
		line-height: 40px;
		z-index: 9;
	}
	.tabcontrol div{
		flex: 1;
		
	}
	.tabcontrol span{
		padding: 5px;
	}
	.active{
		color: var(--color-high-text);
		border-bottom:2px solid var(--color-high-text) ;
	}
</style>
