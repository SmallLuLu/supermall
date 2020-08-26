<template>
	<div class="detailCommon" v-if="Object.keys(detailcommon).length!==0">
		<div class="commonTitle clear">
			<span>用户评价</span>
			<span>更多</span>
		</div>
		<div class="userCommon" v-for="(everycommon,index) in detailcommon" :key="index">
			<div class="userInfo clear">
				<img :src="everycommon.user.avatar" alt="">
				<span>{{everycommon.user.uname}}</span>
			</div>
			<div class="userContent">{{everycommon.content}}</div>
			<div class="shop">
				<span>{{new Date(parseInt(everycommon.created) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')}}</span>
				<span>{{everycommon.style}}</span>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		props: ["detailcommon"]
	}
</script>

<style scoped>
	.detailCommon {
		width: 94%;
		margin-left: 3%;
	}
	.commonTitle{
		line-height: 20px;
		color: #000000;
		font-size: 14px;
	}
	.commonTitle span:nth-of-type(2){
		float: right;
	}
	.userCommon{
		border-top: 1px solid #eee;
		margin-top:15px ;
	}
	.userInfo{
		margin-top: 10px;
	}
	.userInfo img{
		float: left;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.userInfo span{
		float: left;
		margin-left: 10px;
		line-height: 40px;
		font-size: 14px;
		color: #000000;
	}
	.userContent,.shop{
		font-size: 13px;
		line-height: 20px;
		color: #000000;
		margin-top: 5px;
	}
	.shop{
		color: #c1c1c1;
		
	}
	.shop span:nth-of-type(2){
		margin-left: 10px;
		
	}
</style>
