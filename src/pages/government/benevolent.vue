<template>
	<div class="benevolent">
		<img :src="benevolent_1" />
		<div class="img2"><img :src="benevolent_2" /></div>
	</div>
</template>

<script>
	import benevolent_1 from '../img/hz_1.png';
	import benevolent_2 from '../img/hz_2.png';
	export default {
		data: function() {
			return {
				benevolent_1: benevolent_1,
				benevolent_2: benevolent_2,
			};
		},
		mounted: function() {
			this.$emit("setCrumb", "惠政信用服务平台");
		}

	};
</script>

<style lang="less" scoped>
	.benevolent {
		.img2{
			margin-bottom: 15px;
		}
	}
</style>