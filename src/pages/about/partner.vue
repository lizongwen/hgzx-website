<template>
	<div class="">
		<img :src="public_1" style="float:left;margin-left: 0;" />
		<img :src="public_2" style="float:left;" />
		<img :src="public_3" style="float:left;" />
		<img :src="public_4" style="float:left;" />
		<img :src="public_5" style="float:left; margin-left: 0;" />
		<img :src="public_6" style="float:left;" />
		<img :src="public_7" style="float:left;" />
		<img :src="public_8" style="float:left;" />
		<img :src="public_9" style="float:left; margin-left: 0;" />
		<img :src="public_10" style="float:left;" />
		<img :src="public_11" style="float:left;" />
		<img :src="public_12" style="float:left;" />
		<img :src="public_13" style="float:left; margin-left: 0;" />
		<img :src="public_14" style="float:left;" />
		<img :src="public_15" style="float:left;" />
		<img :src="public_16" style="float:left;" />
		<img :src="public_17" style="float:left;margin-left: 0;" />
		<img :src="public_18" style="float:left;" />
		<img :src="public_19" style="float:left;" />
		<img :src="public_20" style="float:left;" />
		<img :src="public_21" style="float:left;margin-left: 0;" />
		<img :src="public_22" style="float:left;" />
		<img :src="public_23" style="float:left;" />
		<img :src="public_24" style="float:left;" />
	</div>
</template>

<script>
	import friend_1 from '../img/friend_1.png';
	import friend_2 from '../img/friend_2.png';
	import friend_3 from '../img/friend_3.png';
	import friend_4 from '../img/friend_4.png';
	import friend_5 from '../img/friend_5.png';
	import friend_6 from '../img/friend_6.png';
	import friend_7 from '../img/friend_7.png';
	import friend_8 from '../img/friend_8.png';
	import friend_9 from '../img/friend_9.png';
	import friend_10 from '../img/friend_10.png';
	import friend_11 from '../img/friend_11.png';
	import friend_12 from '../img/friend_12.png';
	import friend_13 from '../img/friend_13.png';
	import friend_14 from '../img/friend_14.png';
	import friend_15 from '../img/friend_15.png';
	import friend_16 from '../img/friend_16.png';
	import friend_17 from '../img/friend_17.png';
	import friend_18 from '../img/friend_18.png';
	import friend_19 from '../img/friend_19.png';
	import friend_20 from '../img/friend_20.png';
	import friend_21 from '../img/friend_21.png';
	import friend_22 from '../img/friend_22.png';
	import friend_23 from '../img/friend_23.png';
	import friend_24 from '../img/friend_24.png';
	export default {
		data: function() {
			return {
				public_1: friend_1,
				public_2: friend_2,
				public_3: friend_3,
				public_4: friend_4,
				public_5: friend_5,
				public_6: friend_6,
				public_7: friend_7,
				public_8: friend_8,
				public_9: friend_9,
				public_10: friend_10,
				public_11: friend_11,
				public_12: friend_12,
				public_13: friend_13,
				public_14: friend_14,
				public_15: friend_15,
				public_16: friend_16,
				public_17: friend_17,
				public_18: friend_18,
				public_19: friend_19,
				public_20: friend_20,
				public_21: friend_21,
				public_22: friend_22,
				public_23: friend_23,
				public_24: friend_24,

			};
		},
		mounted: function() {
			this.$emit("setCrumb", "合作伙伴");
		}
	}
</script>

<style lang="less" scoped>
	img {
		/*width: 181px;
					height: 63px;*/
		margin: 0 0px 17px 22px;
	}
</style>