<template>
	<div class="detail_18">
		<div class="header">芜湖市公安局网安支队莅临惠国征信指导网络安全工作</div>
		<div class="nav">
			<p class="left">发布日期：2016-11-03</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<p class="p1">随着信息技术和互联网络技术的飞速发展，互联网信息安全工作的重要性日益突显。2016年11月3日上午，芜湖市公安局网安支队领导一行莅临我公司，就惠国征信重要信息系统和网络安全保护有关工作开展情况进行具体了解和现场指导。我公司主要领导，相关部门负责人及技术人员热情接待了网安支队到访。</p>
		<div class="img"><img :src="detail_181" /></div>
		<p class="p1">网安支队指导组对惠国征信的工作表示赞赏和认可，并在网络数据安全建设方面提出了具有建设性的指导意见。我公司领导代表公司上下感谢市公安局的帮助和指导，并表示惠国征信下一步将成立网络信息安全小组，与芜湖市网安支队进行对接，学习网络安全法律法规，严格贯彻落实信息安全等级保护、风险评估等网络安全要求，健全信息数据安全机制和体系，落实各项安全措施，提高企业安全防护和管理水平，确保重要信息系统和网络安全。</p>
		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_181 from './img/new7-1.jpg';
	export default {
		props: ['newsDetail'],
		data: function() {
			return {
				detail_181: detail_181,
			};
		},
	};
</script>

<style lang="less" scoped>
	.detail_18 {
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
			width: 550px;
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
			width: 320px;
			margin: 0 auto;
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