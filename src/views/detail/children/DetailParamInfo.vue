<template>
	<div class="detailParamsInfo" v-if="Object.keys(paramsinfo).length!==0">
		<table class="tableSizes">
			<tr v-for="(tr,index) in paramsinfo.sizes[0]" :key="index">
				<td v-for="(td,tdindex) in tr" :key="tdindex">{{td}}</td>
			</tr>
		</table>
		<table class="tableInfos">
			<tr v-for="(tr,index) in paramsinfo.infos" :key="index">
				<td v-for="(td,tdindex) in tr" :key="tdindex">{{td}}</td>
			</tr>
		</table>
		<div class="info-img" v-if="paramsinfo.image.length !== 0">
			<img :src="paramsinfo.image" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		props: ["paramsinfo"],
		data() {
			return {}
		}
	}
</script>

<style scoped>
	.tableSizes,
	.tableInfos {
		width: 94%;
		margin: 20px 3%;
		border-collapse: collapse;
		border-bottom: 3px solid #eee;
		font-size: 14px;
	}

	.tableSizes {
		table-layout: fixed;
	}

	.tableSizes tr,
	.tableInfos tr {
		line-height: 30px;
	}

	.tableSizes td {
		border-bottom: 1px solid #eee;
	}

	.tableInfos tr td {
		border-bottom: 1px solid #eee;
		color: var(--color-tint);
	}

	.tableInfos tr td:nth-of-type(1) {
		width: 30%;
		color: #000000;
	}

	.info-img img {
		width: 100%;
	}
</style>
