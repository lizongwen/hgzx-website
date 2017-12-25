<template>
	<div class="supervise">
		<img :src="supervise_1" />
		<div class="img2"><img :src="supervise_2" /></div>
	</div>
</template>

<script>
	import supervise_1 from '../img/hj_1.png';
	import supervise_2 from '../img/hj_2.png';
	export default {
		data: function() {
			return {
				supervise_1: supervise_1,
				supervise_2: supervise_2,
			};
		},
        mounted: function() {
			this.$emit("setCrumb", "互金监管平台");
		}
	};
</script>

<style lang="less" scoped>
	.supervise {
		.img2{
			margin-bottom: 15px;
		}
	}
</style>