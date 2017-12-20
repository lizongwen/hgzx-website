<template>
	<div class="detail_1">
		<div class="header">跨境征信将在中国内地开展业务试点</div>
		<div class="nav">
			<p class="left">发布日期：2016-07-14</p>
			<p class="right">发布人：中国新闻网</p>
		</div>
		<div class="hr1"></div>
		<div class="img"><img :src="detail_81" /></div>
		<div class="p1">中新上海网7月14日电（申海）日前，惠国征信董事长兼CEO徐慧囝博士及公司核心团队成员作为中国区域代表应邀出席湄公河区域国家间信用信息共享第一次会议。据悉，惠国征信将配合国际商业信息行业协会完善中国的跨境数据交换模型，并将跨境征信业务试点工作在国内率先落地。 由世界银行集团（World Bank Group）国际金融公司（IFC）、亚太经合组织工商咨询理事会（ABAC）和国际商业信息行业协会（BIIA）以及泰国国家征信局（NCB）共同举办的湄公河区域国家间信用信息共享第一次会议近日在泰国曼谷隆重召开。各国与会代表一起就湄公河区域各国在贸易和投资中不同国家贸易方信息对称问题进行了深入探讨，旨在通过信用数据交换，降低信息获得成本和交易风险，通过跨境信用信息共享为湄公河区域各国贸易金融一体化奠定良好的基础。 据悉，惠国征信CEO徐慧囝博士在会议上作了《中国商业化信息全景》主题演讲，介绍了中国信用环境立法的背景，从国家需求及政策层面解析目前中国信用行业建设的重要性及政府的支持力，徐博士描绘了中国目前商业征信机构从政府性质到市场性质的有机转换和双轮发展，同时对中国目前的征信平台做了全方位的研究分析，详细阐述了征信技术面向信用评分的大数据途径及模型。 作为贯彻2015亚太财长宣言的最重要技术支撑，亚太区最领先行业实践的惠国征信行为类富媒体大数据征信技术，得到IFC和BIIA的充分肯定，被率先推选为湄公河区域跨境实践试点合作方。惠国征信作为中国面对东南亚地区信用数据服务窗口，将在一带一路战略的重要方向上助力湄公河流域(中, 柬, 泰, 老, 越, 缅)经济一体化的早日实现，推动该区域的经济协同发展。</div>
		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_81 from './img/new-meiti2.jpeg';
	
	export default {
		props: ['newsDetail'],
        data: function() {
			return {
				detail_81: detail_81,
				
			};
		},
	};
</script>

<style lang="less" scoped>
	.detail_1 {
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
			width: 300px;
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
			width: 600px;
			margin: 0 auto;
			text-align: center;
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
		.p3{
			font-size:14px;
		  	text-align: center;
		  	color: #888;
		}
		.hr2 {
			margin-top: 20px;
			margin-bottom: 10px;
			border: 0;
			border-top: 1px solid #eee;
		}
	}
</style>