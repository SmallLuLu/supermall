<template>
	<div class="userMes clear">
		<a :href="login">
			<div>
				<img :src="userImg" alt="" class="userImg">
			</div>
			<div class="userText">
				<p>{{userName}}</p>
				<p>
					<i class="iconfont icon-shouji"></i>
					<span>{{userPhone}}</span>
				</p>
			</div>
			<div>
				<i class="iconfont icon-youjiantou"></i>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		props: {
			login:{
				type:String,
				default:'###'
			},
			userImg: {
				type: String,
				default: require('assets/img/profile/userImg.jpg')
			},
			userName:{
				type:String,
				default:'登陆/注册'
			},
			userPhone:{
				type:String,
				default:'暂无绑定手机'
			}
		}
	}
</script>

<style scoped>
	.userMes {
		height: 90px;
		padding: 15px;
		background-color: var(--color-tint);
	}

	.userMes div {
		float: left;
	}

	.userMes div:nth-of-type(3) {
		float: right;
		color: white;
		line-height: 60px;
		font-size: 30px;
	}

	.userImg {
		height: 60px;
		width: 60px;
		border-radius: 50%;
		background-color: #FFFFFF;
	}

	.userText {
		line-height: 30px;
		margin-left: 15px;
		color: white;
	}

	.userText p:nth-of-type(1) {
		font-size: 22px;
	}

	.userText p:nth-of-type(2) {
		font-size: 16px;
	}
</style>
