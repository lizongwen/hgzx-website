<template>
	<div class="detail_7">
		<div class="header">2016年社会信用体系建设十大新闻事件</div>
		<div class="nav">
			<p class="left">发布日期：2017-04-13</p>
			<p class="right">发布人：信用中国</p>
		</div>
		<div class="hr1"></div>
		<div class="img"><img :src="detail_71" /></div>
		<div class="hr2"></div>
	</div>
</template>
<script>
	import detail_71 from './img/new-hangye8.jpg';
	export default {
		props: ['newsDetail'],
		data: function() {
			return {
				detail_71: detail_71,

			};
		},
	};
</script>

<style lang="less" scoped>
	.detail_7 {
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
			width: 320px;
			color: #888;
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
			/*height: 430px;*/
			width: 660px;
			margin: 0 auto;
			text-align: center;
		}
		.p1 {
			font-size: 16px;
			text-indent: 2em;
			padding-bottom: 5px;
			line-height: 1.75;
			color: #888;
		}
		.p2 {
			font-size: 16px;
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