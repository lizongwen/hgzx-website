<template>
	<div class="detail_20">
		<div class="header">潘市长会见惠国征信服务有限公司</div>
		<div class="nav">
			<p class="left">发布日期：2016-08-25</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<p class="p1"> 8月24日上午，潘朝晖市长在市政务文化中心会见厅会见了惠国征信服务有限公司一行，我委调研员张勇及业务科室负责同志参加会见。</p>
		<div class="img"><img :src="detail_241" /></div>
		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_241 from './img/flink-bar.jpg';
	export default {
		props: ['newsDetail'],
		data: function() {
			return {
				detail_241: detail_241,
			};
		},
	};
</script>

<style lang="less" scoped>
	.detail_20 {
		.hr1 {
			margin-top: 40px;
			margin-bottom: 10px;
			border: 0;
			border-top: 1px solid #eee;
		}
		.header {
			font-size: 18px;
			text-align: center;
			margin-bottom: 5px;
			color: #b62a31;
		}
		.nav {
			width: 420px;
			color: #31708f;
			margin: 0 auto;
			font-size: 12px;
			.left {
				float: left;
				padding-left: 15px;
			}
			.right {
				float: right;
				padding-right: 15px;
			}
		}
		.img {
			
			margin: 0 auto;
		}
		.p1 {
			font-size: 14px;
			text-indent: 2em;
			padding-bottom: 5px;
			line-height: 1.75;
			color: #888;
		}
		.p2 {
			font-size: 14px;
			text-align: center;
		}
		.p3 {
			font-size: 12px;
			text-align: center;
			color: #c8c8c8;
		}
		.hr2 {
			margin-top: 20px;
			margin-bottom: 10px;
			border: 0;
			border-top: 1px solid #eee;
		}
	}
</style>