<template>
	<div id="home">
		<!-- 导航栏 -->
		<NavBar class="home-nav">
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</NavBar>
		<!-- scroll滚动插件 -->
		<Scroll class="content">
			<!-- 轮播图 -->
			<div class="homeSwiper">
				<swiper ref="mySwiper" :options="swiperOptions" v-if="banner.length>1">
					<swiper-slide v-for="(data,index) in banner" :key="index">
						<a :href="data.link">
							<img :src="data.image" :alt="data.title">
						</a>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<!-- Recommend -->
			<Recommend :inner='recommend'></Recommend>
			<!-- 本周流行 -->
			<Fashion></Fashion>
			<!-- 可控制的导航栏 -->
			<TabControl :title="tabcontrol" class="TabControl" @tabClick="tabClick"></TabControl>
			<!-- 商品列表 -->
			<GoodsList :goodsList="goods[currentType]"></GoodsList>
		</Scroll>

	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar.vue'
	import TabControl from '../../components/privately/TabControl.vue'
	import GoodsList from '../../components/privately/goods/GoodsList.vue'
	import Scroll from '../../components/common/Scroll.vue'

	import Recommend from './children/RecommendView.vue'
	import Fashion from './children/FashionView.vue'

	import {
		getHomeMultidata,
		getHomeGoods
	} from '../../network/home.js'
	export default {
		components: {
			NavBar,
			Recommend,
			Fashion,
			TabControl,
			GoodsList,
			Scroll
		},
		data() {
			return {
				banner: [], // 轮播图数据
				recommend: [], //Recommend数据
				tabcontrol: ['流行', '新款', '精选'], //传递给TabControl的数据
				// 首页商品数据'pop':流行数据，'news':新款数据,'sell':精选数据
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					}
				},
				currentType: 'pop', //首页商品数据切换传递给GoodsList的数据
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
			// 请求轮播图
			this.getHomeMultidata();
			// 请求流行数据
			this.getHomeGoods('pop');
			// 请求新品数据
			this.getHomeGoods('new');
			// 请求精选数据
			this.getHomeGoods('sell');

		},
		methods: {
			/*
			 *事件监听
			 *
			 */
			// 监听TabControl切换，控制给GoodsList传递的数据
			tabClick(number) {
				switch (number) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				console.log(number)
			},


			/*
			 *网络请求
			 *
			 */
			// 请求轮播图数据
			getHomeMultidata() {
				getHomeMultidata()
					.then(res => {
						this.banner = res.data.banner.list;
						this.recommend = res.data.recommend.list;
					})
			},
			// 商品请求page：请求的页码，pageGoods：请求回来的数据数组
			getHomeGoods(type) {
				let page = this.goods[type].page + 1;
				getHomeGoods(type, page)
					.then(res => {
						let pageGoods = res.data.list;
						this.goods[type].list.push(...pageGoods);
						this.goods[type].page = page;
					})
			}

		},
		computed: {},
		mounted() {

		}
	}
</script>

<style scoped>
	#home{
		height: 100vh;
		overflow: auto;
	}
	.home-nav {
		background: var(--color-tint);
		color: white;
	}

	.homeSwiper {
		height: 188px;
	}

	.swiper-container {
		height: 100%;
	}

	.homeSwiper img,
	.homeSwiper a {
		display: inline-block;
		height: 100%;
		width: 100%;
	}

	.TabControl {
		position: sticky;
		top: 44px;
		background: white;
	}
	.content{
		height: -webkit-calc(100% - 93px);
		margin-top: 44px;
		overflow-y:hidden ;
	}
</style>
