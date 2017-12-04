<template>
	<div class="iot">
		<p class="title-big">2016年中国国际大数据大会获奖</p>
		<p class="title-small">惠国征信荣获二零一六年度中国大数据领域创新创业奖</p>
		<img :src="iot_1" />
		<p class="title-small">惠国征信荣获二零一六年度中国大数据领域创新人物奖</p>
		<img :src="iot_2" />
	</div>
</template>

<script>
	import iot_1 from '../img/new-jiang1.png';
	import iot_2 from '../img/new-jiang2.png';
	export default {
		data: function() {
			return {
				iot_1: iot_1,
				iot_2: iot_2,
			};
		},

	};
</script>

<style lang="less" scoped>
	.iot {
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