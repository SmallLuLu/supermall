<template>
	<div id="home">
		<NavBar class="home-nav">
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</NavBar>
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

	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar.vue'
	import {
		getHomeMultidata
	} from '../../network/home.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				// 轮播图数据
				banner: [],
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
			
		},
		methods:{
			
		},
		computed: {
			// swiper() {
			// 	return this.$refs.mySwiper.$swiper
			// }
		},
		mounted() {
			// 请求轮播图数据
			getHomeMultidata()
			.then(res => {
				this.banner = res.data.banner.list
				console.log(this.banner)
			})
		}
	}
</script>

<style scoped>
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
</style>
