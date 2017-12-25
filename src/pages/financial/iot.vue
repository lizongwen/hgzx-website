<template>
	<div class="iot">
		<div class="iot-left">
			<div class="img1"><img :src="iot_1" /></div>
		</div>
		<div class="iot-right">
			<div class="img2"><img :src="iot_2" /></div>
			<div class="img3"><img :src="iot_3" /></div>
			<div class="img4"><img :src="iot_4" /></div>
		</div>
	</div>
</template>

<script>
	import iot_1 from '../img/iot_1.png';
	import iot_2 from '../img/iot_2.png';
	import iot_3 from '../img/iot_3.png';
	import iot_4 from '../img/iot_4.png';
	export default {
		data: function() {
			return {
				iot_1: iot_1,
				iot_2: iot_2,
				iot_3: iot_3,
				iot_4: iot_4,
			};
		},
		mounted: function() {
			this.$emit("setCrumb", "IOT贷后监管平台");
		}

	};
</script>

<style lang="less" scoped>
	.iot {
		.iot-left {
			width: 280px;
			float: left;
			margin-top: 20px;
		}
		.iot-right {
			width: 520px;
			height: 100%;
			float: left;
			img{
				margin-bottom: 10px;
			}
		}
	}
</style>