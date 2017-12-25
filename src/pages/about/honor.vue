<template>
	<div class="honor">
		<p class="title-big">2016年中国国际大数据大会获奖</p>
		<p class="title-small">惠国征信荣获二零一六年度中国大数据领域创新创业奖</p>
		<img :src="honor_1" />
		<p class="title-small">惠国征信荣获二零一六年度中国大数据领域创新人物奖</p>
		<img :src="honor_2" />
	</div>
</template>

<script>
	import honor_1 from '../img/new-jiang1.png';
	import honor_2 from '../img/new-jiang2.png';
	export default {
		data: function() {
			return {
				honor_1: honor_1,
				honor_2: honor_2,
			};
		},
		mounted: function() {
			this.$emit("setCrumb", "荣誉资质");
		}
	};
</script>

<style lang="less" scoped>
	.honor {
		text-align: center;
		.title-big {
			font-weight: 500;
			font-size: 18px;
			color: #CD0000;
			padding-bottom: 15px;
		}
		.title-small {
			font-size: 14px;
			padding-bottom: 13px;
		}
		img{
			padding-bottom: 15px;
		}
	}
</style>