<template>
	<div class="categoryGoods">
		<el-row :gutter="20">
			<el-col :span="8" v-for="(item,index) in categorygoodsinfo" :key="index" class="goodWrap">
					<a :href="item.link">
						<img :src="item.image" :alt="item.title" class="goodImg">
						<p class="goodName">{{item.title}}</p>
					</a>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		props: ["categorygoodsinfo"],
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.categoryGoods {
		padding: 20px 8px;
	}
	.goodWrap{
		margin-bottom: 15px;
	}
	.goodImg{
		width: 80%;
	}
	.goodName{
		font-size:14px ;
		text-align: center;
		margin-top: 15px;
	}
</style>
