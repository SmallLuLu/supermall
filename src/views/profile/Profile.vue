<template>
	<div class="profileWrap">
		<!-- 我的NavBar -->
		<NavBar class="profileNavBar">
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</NavBar>
		<!-- 个人信息 -->
		<UserMes></UserMes>
		<!-- 账号余额 -->
		<UserAccount></UserAccount>
		<!-- 其余的内容 -->
		<UserElse :info="elseInfo1"></UserElse>
		<UserElse :info="elseInfo2"></UserElse>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar.vue'
	
	
	import UserMes from './children/UserMes.vue'
	import UserAccount from './children/UserAccount.vue'
	import UserElse from './children/UserElse.vue'
	
	export default{
		components:{
			NavBar,
			UserMes,
			UserAccount,
			UserElse
		},
		data(){
			return{
				elseInfo1:[
					{
						icon:'icon-wodexiaoxi',
						text:'我的消息',
						url:'###'
					},
					{
						icon:'icon--',
						text:'积分商城',
						url:'###'
					},
					{
						icon:'icon-huangguan',
						text:'会员卡',
						url:'###'
					}
				],
				elseInfo2:[
					{
						icon:'icon-gouwuche',
						text:'我的购物车',
						url:'###'
					},
					{
						icon:'icon-apps',
						text:'下载购物APP',
						url:'###'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.profileNavBar{
		background-color: var(--color-tint);
		color: #FFFFFF;
	}
	
</style>
