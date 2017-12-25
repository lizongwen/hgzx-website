<template>
	<div class="detail_23">
		<div class="header">徐慧囝总裁领军惠国征信，荣获中国大数据领域重磅奖项</div>
		<div class="nav">
			<p class="left">发布日期：2016-10-21</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<p class="p1">为进一步发挥大数据在改造和提升传统产业中的积极作用，深化大数据在各行业的创新应用，凝聚产业核心力量，完善大数据产业链，共同助推中国经济转型升级，由工业和信息化部指导,人民邮电出版社（工信部部署单位）主办，中国支付清算协会、中国互联金融协会协办的2016年第三届中国国际大数据大会于9月27—28日在北京隆重召开。惠国征信服务股份有限公司应邀参加，并荣获“二零一六年度中国大数据领域创新创业奖”，同时，惠国征信徐慧囝总裁荣获“二零一六年度中国大数据领域创新人物奖”。</p>
		<div style="margin: 0 auto; height: 420px;width: 620px;">
			<div style="width: 310px; float: left;"><img :src="detail_231" /></div>
			<div style="width: 310px; float: left;" ><img :src="detail_232" /></div>
		</div>
		<p class="p1">本届大数据大会以“数聚新动能·数创大未来”为主题，讨论内容覆盖网络安全、互联网+、分享经济、政府治理与智慧城市发展、通信、大数据技术、交易、金融、市场、营销、征信、旅游等市场热点。大会有二千多位行业代表出席，百位发言嘉宾为业界带来关于大数据政策、标准、市场、技术、产品、应用、安全、交易等产业热点话题的演讲，全面解读我国大数据产业当前态势与发展。</p>
		<div class="img"><img :src="detail_233" /></div>
		<p class="p1">按照《社会信用体系建设规划纲要（2014-2020 年）》要求，围绕建设社会信用体系，惠国征信将借助芜湖市社会信用管理和数据采集机制，以及来自 D&B 的创始团队在中小企业金融服务的专业经验，从惠政、惠商、惠农等业务主线进行产品规划，创造由政府统筹、行业自律、商业机构应用的征信建设模式，强化信用对社会主体、政府部门的约束作用，着力构建以征信为基础、以信息公示为手段、以信用监管为核心的社会信用体系，积极协助推动芜湖市信用示范城市的建设工作，提高政府管理效能、降低社会管理成本、创建诚信社会。 公司CEO徐慧囝博士，曾任中国人民银行《征信业管理条例》立法小组顾问、央行总部上海数据中心外部专家、香港金融管理局中小企业信贷风险研究论坛主讲、香港中小企业征信局运营负责人、上海市银行同业公会新资本协议高级计量班讲师、美国《创新管理应用》学术期刊副主编、复旦大学管理会计硕士项目导师并荣获2015复旦慧眼识才金奖，拥有近20年的数量经济学定量分析与数据挖掘经验，在风险建模、资产价值分析、征信产品开发与运营、团队经营管理等方面具有丰富的经验。大会评委会认为，徐慧囝博士荣获“二零一六年度中国大数据领域创新人物奖”实至名归。
		</p>

		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_231 from './img/new-jiang1.jpeg';
	import detail_232 from './img/new-jiang2.jpeg';
	import detail_233 from './img/new-jiang3.jpeg';
	export default {
		props: ['newsDetail'],
		data: function() {
			return {
				detail_231: detail_231,
				detail_232: detail_232,
				detail_233: detail_233,
				
			};
		},
	};
</script>

<style lang="less" scoped>
	.detail_23 {
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
			width: 440px;
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