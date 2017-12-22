<template>
	<div class="detail_4">
		<div class="header">《芜湖日报》头版载文：“惠政平台”助力芜湖信用示范城市建设</div>
		<div class="nav">
			<p class="left">发布日期：2017-03-08</p>
			<p class="right">发布人：芜湖日报</p>
		</div>
		<div class="hr1"></div>
		<div class="p1">3月8日，芜湖市主流媒体《芜湖日报》在头版重要位置载文“惠政平台助力芜湖信用示范城市建设”，详细介绍了惠国征信着力打造“惠政平台”助力芜湖实现创建国家信用体系建设示范城市的目标。以下为全文内容：</div>
		<div class="img"><img :src="detail_41" /></div>
		<div class="p1">记者近日从市发改委获悉，当前惠国征信正在着力打造“惠政平台”，该平台将应用于市场监管、公共服务、财政补贴、税收征缴和政府采购等多个政府职能领域，助力芜湖实现创建国家信用体系建设示范城市的目标。</div>
		<div class="p1">据介绍，“惠政平台”包含联合惩戒、综合监管、信用积分和信用运行分析等四大功能，可以将信用记录形成面向全社会主体的信用评价，应用于公共事业、城市服务、商业服务等领域的失信惩戒和守信激励。同时在全社会形成一处违法、处处受限的监管网络，达到限制严重失信者市场活动的效果。此外，还可以将社会主体按信用状况分为若干等级，实现精准监管、分类执法。</div>
		<div class="p1">打造“惠政平台”的同时，惠国征信正着力完善我市中小企业大数据征信体系，打造中小企业融资管理平台，解决银企信息不对称难题，为中小企业提供高效、便捷、智慧的融资服务。</div>
		<div class="p1">此外，惠国征信还进一步建设和完善新型农业经营主体信用体系，打造农业供应链惠农平台。根据当地优势农业和特色农产品，以供应链的核心企业为中心，捆绑上下游中小企业、农户和消费者，提供支持农业供应链的系统性金融解决方案，促进农业产业转型升级。</div>
		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_41 from './img/meiti5-1.jpeg';
	export default {
		props: ['newsDetail'],
        data: function() {
			return {
				detail_41: detail_41,
			};
		},
	};
</script>

<style lang="less" scoped>
	.detail_4{
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
			width: 460px;
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
			width: 700px;
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