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
		<Scroll :probetype="3" :pullupload="true" class="content" ref="scroll" @scroll="detailScroll">
			<!-- 轮播图 -->
			<div class="detailSwiper">
				<swiper ref="mySwiper" :options="swiperOptions" v-if="topImages.length>1">
					<swiper-slide v-for="(data,index) in topImages" :key="index">
						<img :src="data">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<!-- 商品基础信息 -->
			<DetailBaseInfo :goods="goods"></DetailBaseInfo>
			<!-- 店铺信息 -->
			<DetailShop :shop="shop"></DetailShop>
			<!-- 商品详情 -->
			<DetailGoodsInfo :detailgoodinfo="detailInfo" @detailImageLoad="detailImageLoad"></DetailGoodsInfo>
			<!-- 商品尺寸 -->
			<DetailParamInfo :paramsinfo="pramaInfo" ref="params"></DetailParamInfo>
			<!-- 用户评价 -->
			<DetailCommon :detailcommon="commentInfo" ref="common"></DetailCommon>
			<!-- 热门推荐 -->
			<div class="detailRecommend" ref="recommend">
				<div class="detailRecommendTitle">热门推荐</div>
				<GoodsList :goodsList="recommendInfo"></GoodsList>
			</div>
		</Scroll>
		<!-- 底部状态栏 -->
		<DetailBottomBar @addBayCar="addbuycar"></DetailBottomBar>
		<!-- 返回顶部 -->
		<BackTop ref="backTop" @click.native="backTop"></BackTop>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar.vue'
	import Scroll from '../../components/common/Scroll.vue'
	import {
		debounce
	} from '../../components/common/debounce.js'
	import GoodsList from '../../components/privately/goods/GoodsList.vue'
	import BackTop from '../../components/privately/BackTop.vue'


	import DetailBaseInfo from './children/DetailBaseInfo.vue'
	import DetailShop from './children/DetailShop.vue'
	import DetailGoodsInfo from './children/DetailGoodsInfo.vue'
	import DetailParamInfo from './children/DetailParamInfo.vue'
	import DetailCommon from './children/DetailCommon.vue'
	import DetailBottomBar from './children/DetailBottomBar.vue'
	import {
		getDetail,
		Goods,
		GoodsParam,
		getRecommend
	} from '../../network/detail.js'
	export default {
		name: 'Detail',
		components: {
			NavBar,
			Scroll,
			DetailBaseInfo,
			DetailShop,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommon,
			GoodsList,
			DetailBottomBar,
			BackTop
		},
		data() {
			return {
				iid: null, //商品id
				titles: ['商品', '参数', '评论', '推荐'],
				titlesActive: 0,
				topImages: [], //轮播图图片数据
				goods: {}, // 商品信息
				shop: {}, // 店铺信息的数据
				detailInfo: {}, // 商品的详情数据
				pramaInfo: {}, //商品尺寸信息
				commentInfo: [], //用户评价
				recommendInfo: [], //热门推荐
				themeTopYs: [], //导航栏对应的位置的高度
				getThemeTopY: null, //获取导航栏对应的位置的高度
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
			// 获取热门推荐数据
			this.getRecommend();
			this.iid = this.$route.params.id; //获取路由传过来的id
			// 根据id获取数据
			getDetail(this.iid)
				.then(res => {
					const data = res.result;
					// 顶部轮播图数据
					this.topImages = res.result.itemInfo.topImages;
					// 获取商品信息
					this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
					// 创建店铺信息的数据
					this.shop = data.shopInfo;
					// 保存商品的详情数据
					this.detailInfo = data.detailInfo;
					// 商品的尺寸规格信息
					this.pramaInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
					// 评价信息
					if (data.rate.list) {
						this.commentInfo = data.rate.list;
					}

				});
			// 给getThemeTopY赋值
			this.getThemeTopY = debounce(() => {
				this.themeTopYs = [];
				this.themeTopYs.push(0);
				this.themeTopYs.push(-this.$refs.params.$el.offsetTop+44);
				this.themeTopYs.push(-this.$refs.common.$el.offsetTop+44);
				this.themeTopYs.push(-this.$refs.recommend.offsetTop+44);
			}, 50)

		},
		methods: {
			// 商品详情导航栏的切换
			titleChange(index) {
				this.titlesActive = index;
				// 点击导航栏滚动到相应的位置
				this.$refs.scroll.scroll.scrollTo(0, this.themeTopYs[index], 0)
			},
			// 商品详情返回上一页面
			detailGoback() {
				this.$router.go(-1)
			},
			// 解决Better-Scroll中BUG，图片加载之后重新刷新content的高度
			detailImageLoad() {
				debounce(this.$refs.scroll.scroll.refresh(), 50);
				this.getThemeTopY();
			},
			// 热门推荐数据请求回调函数
			getRecommend() {
				getRecommend()
					.then(res => {
						this.recommendInfo = res.data
					})
			},
			detailScroll(position) {
				// 根据滚动的高度设置上面导航栏的样式
				const positionY = -position.y;
				if (positionY > 0 && positionY <-this.themeTopYs[1]) {
					this.titlesActive = 0
				} else if (positionY >= -this.themeTopYs[1] && positionY <-this.themeTopYs[2]) {
					this.titlesActive = 1
				} else if (positionY >= -this.themeTopYs[2] && positionY < -this.themeTopYs[3]) {
					this.titlesActive = 2
				}else if(positionY >= -this.themeTopYs[3]){
					this.titlesActive = 3
				}
				// 设置回到顶部的显现和隐藏
				if(positionY>1000){
					this.$refs.backTop.show=true
				}else{
					this.$refs.backTop.show=false
				}
			},
			// 返回顶部
			backTop(){
				this.$refs.scroll.scroll.scrollTo(0,0,0);
				this.titlesActive = 0
			},
			// 加入购物车
			addbuycar(){
				const product={};
				product.image=this.topImages[0];
				product.title=this.goods.title;
				product.desc=this.goods.desc;
				product.price=this.goods.newPrice;
				product.iid=this.iid;
				product.cont=1;
				this.$store.commit('addBuyCar',product);
			}
			
			
		},
		mounted() {

		}

	}
</script>

<style scoped>
	.detailWrap {
		height: 100vh;
		width: 100%;
		position: relative;
		z-index: 9;
		background-color: white;
	}

	.detailTilte {
		display: flex;
	}

	.detailTilte li {
		flex: 1;
	}

	.detailNavBar i {
		font-size: 20px;
	}

	.active {
		color: var(--color-tint);
	}

	.content {
		height: -webkit-calc(100% - 93px);
		overflow-y: hidden;
	}

	.detailSwiper {
		height: 350px;
	}

	.swiper-container {
		height: 350px;
		overflow: hidden;
	}

	.detailSwiper img {
		width: 100%;
		height: 100%;
	}

	.detailRecommend {
		margin-top: 20px;
		border-top: 5px solid #eee;
	}

	.detailRecommendTitle {
		line-height: 30px;
		text-align: center;
		font-size: 16px;
	}
</style>
