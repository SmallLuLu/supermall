<template>
	<div class="detailWrap">
		<NavBar class="detailNavBar">
			<template v-slot:left>
				<i class="iconfont icon-fanhui" @click="detailGoback"></i>
			</template>
			<template v-slot:center>
				<ul class="detailTilte">
					<li v-for="(title,index) in titles" :key="index" :class="{active:titlesActive==index}" @click="titleChange(index)">{{title}}</li>
				</ul>
			</template>
		</NavBar>
		<!-- 滚动插件 -->
		<Scroll :probetype="3" :pullupload="true" class="content">
			<!-- 轮播图 -->
			<div class="detailSwiper">
				<swiper ref="mySwiper" :options="swiperOptions" v-if="topImages.length>1">
					<swiper-slide v-for="(data,index) in topImages" :key="index">
						<img :src="data" >
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<!-- 商品基础信息 -->
			<DetailBaseInfo :goods="goods"></DetailBaseInfo>
			<!-- 店铺信息 -->
			<DetailShop :shop="shop"></DetailShop>
		
		</Scroll>
		
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar.vue'
	import Scroll from '../../components/common/Scroll.vue'
	
	import DetailBaseInfo from './children/DetailBaseInfo.vue'
	import DetailShop from './children/DetailShop.vue'
	
	import {getDetail,Goods} from '../../network/detail.js'
	export default{
		name: 'Detail',
		components:{
			NavBar,
			Scroll,
			DetailBaseInfo,
			DetailShop
		},
		data(){
			return{
				iid:null,//商品id
				titles:['商品','参数','评论','推荐'],
				titlesActive:0,
				topImages:[],//轮播图图片数据
				goods:{},
				shop:{},
				// 设置swiper的配置
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination',
						clickable: true // 允许点击小圆点跳转
					},
					autoplay: true,
					speed: 400,
					loop: true
				}
			}
		},
		created() {
			this.iid=this.$route.params.id;//获取路由传过来的id
			// 根据id获取数据
			getDetail(this.iid)
			.then(res =>{
				const data =res.result;
				// 顶部轮播图数据
				this.topImages=res.result.itemInfo.topImages;
				this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
				this.shop=data.shopInfo;
				console.log(data)
			})
		},
		methods:{
			titleChange(index){
				this.titlesActive=index;
			},
			detailGoback(){
				this.$router.go(-1)
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped>
	.detailWrap{
		height: 100vh;
		width: 100%;
	}
	.detailTilte{
		display: flex;
	}
	.detailTilte li{
		flex: 1;
	}
	.detailNavBar i{
		font-size: 20px;
	}
	.active{
		color: var(--color-tint);
	}
	.content{
		height: -webkit-calc(100% - 93px);
		overflow-y:hidden ;
	}
	.detailSwiper{
		height: 350px;
	}
	.swiper-container{
		height: 350px;
		overflow: hidden;
	}
	.detailSwiper img{
		width: 100%;
		height: 100%;
	}
</style>
