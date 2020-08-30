<template>
	<div class="category">
		<!-- 商品分类NavBar -->
		<NavBar class="categoryNavBar">
			<template v-slot:center>
				<div>商品分类</div>
			</template>
		</NavBar>
		<div class="categoryContent">
			<!-- 商品分类导航栏 -->
			<TabMenu :tabmenus="tabmenusInfo" @tabMenuChange="getGoosChange"></TabMenu>
			<Scroll class="categoryGoodsScroll">
				<!-- 商品 -->
				<CategoryGoods :categorygoodsinfo="categorygoodsinfo" :tabcontrol="tabcontrol"></CategoryGoods>
				<!-- 推荐导航 -->
				<TabControl :title="tabcontrol" @tabClick="tabClick"></TabControl>
				<!-- 推荐商品 -->
				<GoodsList :goodsList="goodsList"></GoodsList>
			</Scroll>
		</div>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar.vue'
	import Scroll from '../../components/common/Scroll.vue'
	import TabControl from '../../components/privately/TabControl.vue'
	import GoodsList from '../../components/privately/goods/GoodsList.vue'

	import {
		getCategory,
		getSubcategory,
		getCategoryDetail
	} from '../../network/category.js'

	import TabMenu from './children/TabMenu.vue'
	import CategoryGoods from './children/CategoryGoods.vue'

	export default {
		components: {
			NavBar,
			TabMenu,
			Scroll,
			CategoryGoods,
			TabControl,
			GoodsList
		},
		data() {
			return {
				scroll: null,
				tabmenusInfo: [],
				categorygoodsinfo: [],
				tabcontrol: ['综合', '新品', '销量'], //传递给TabControl的数据
				goodsList: [],
				goods: {
					'pop': [],
					'new': [],
					'sell': []
				},
			}
		},
		created() {
			// 调用菜单数据的获取
			this._getCategory();
		},
		methods: {
			// 首次加载菜单和商品数据的获取
			_getCategory() {
				getCategory().then(res => {
					this.tabmenusInfo = res.data.category.list;
					let maitKey = this.tabmenusInfo[0].maitKey;
					let miniWallkey = this.tabmenusInfo[0].miniWallkey;
					this._getSubcategory(maitKey);
					this._getCategoryDetail(miniWallkey, 'pop');
					this._getCategoryDetail(miniWallkey, 'new');
					this._getCategoryDetail(miniWallkey, 'sell');
				})
			},
			// 分类数据的获取
			_getSubcategory(maitKey) {
				getSubcategory(maitKey).then(res => {
					this.categorygoodsinfo = res.data.list
				})
			},
			// 分类推荐数据的获取
			_getCategoryDetail(maitKey, type) {
				getCategoryDetail(maitKey, type).then(res => {
					this.goods[type] = res;
					this.goodsList = this.goods.pop;
				})
			},
			// 菜单点击请求数据
			getGoosChange(maitKey) {
				this._getSubcategory(maitKey[0]);
				this._getCategoryDetail(maitKey[1], 'pop');
				this._getCategoryDetail(maitKey[1], 'new');
				this._getCategoryDetail(maitKey[1], 'sell');
			},
			tabClick(index) {
				switch (index) {
					case 0:
						this.goodsList = this.goods.pop
						break
					case 1:
						this.goodsList = this.goods.new
						break
					case 2:
						this.goodsList = this.goods.sell
				}
			}
		}
	}
</script>

<style scoped>
	.category {
		height: 100vh;
	}

	.categoryNavBar {
		background-color: var(--color-tint);
		color: #FFFFFF;
	}

	.categoryContent {
		width: 100vw;
		height: calc(100vh - 93px);
		overflow: hidden;
		position: relative;
	}

	.categoryTabMenuScroll,
	.categoryGoodsScroll {
		height: calc(100vh - 93px);
	}

	.categoryGoodsScroll {
		width: calc(100vw - 100px);
		position: absolute;
		right: 0;
		top: 0;
	}
</style>
