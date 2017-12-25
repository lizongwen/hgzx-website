<template>
	<div class="detail_7">
		<div class="header">中国征信技术获APEC会议肯定</div>
		<div class="nav">
			<p class="left">发布日期：2016-11-01</p>
			<p class="right">发布人：陆家嘴金融网</p>
		</div>
		<div class="hr1"></div>
	    <div class="p1">2016年3月15至16日，亚太经济合作组织财长会议在菲律宾马卡蒂隆重召开，会议聚焦金融基础设施建设。惠国征信CEO徐慧囝博士作为企业界代表嘉宾应邀出席，与各国财长、各界知名人士进行圆桌会议，并对亚太各国金融基础设施建设进行现场点评。</div>
		<div class="img"><img :src="detail_71" /></div>
		<div class="p1">惠国征信的行为类富媒体大数据征信技术作为亚太区最领先行业实践，在本次会议上被肯定为贯彻2015亚太财长宣言的最重要技术支撑。</div>
		<div class="p1">富媒体大数据是通过行为类物联网智能算法技术实时监控企业的经营、生产、仓储、物流等一系列跟企业稳健发展息息相关的深度征信体系。该技术成功的解决了如何通过数据证据链作为中小企业风险判别和预警依据，为金融机构提供重要的贷前贷后风控手段。此项技术在会上被肯定为APEC所倡导的以动产质押代替不动产抵押的最重要技术落地成功案例。其意义在于，通过在配套的监管及法律框架支撑下，以中国为例，该技术可以释放出相当于20万亿元人民币的信用贷款市场需求，根本性地解决了金融机构以动产抵押担保放贷的技术障碍。</div>
		<div class="p1">徐慧囝博士介绍，根据世界银行测算，中国有大约400万家法人类中小企业需要融资，占总数的16.2%。但是，目前国内征信市场结构尚存缺陷，大量中小企业因在担保抵押等方面存在问题而很难获得银行贷款。因此，要在可移动资产担保及行为类数据采集方面做出突破和创新。</div>
		<div class="img"><img :src="detail_72" /></div>
		<div class="p3">（左一为通用电气金融集团亚太区CEO, Mr. Christopher Wohlert，左二为徐慧囝博士，右二为亚太中东信息协会BIIA董事总经理Mr. Peter Sheerin，右一为菲律宾财政部助理部长Teresa Habitan女士）</div>
		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_71 from './img/new5-1.jpeg';
	import detail_72 from './img/new5-2.jpeg';
	export default {
		props: ['newsDetail'],
        data: function() {
			return {
				detail_71: detail_71,
				detail_72: detail_72,
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
			font-size: 16px;
			text-indent: 2em;
			padding-bottom: 5px;
			line-height: 1.75;
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