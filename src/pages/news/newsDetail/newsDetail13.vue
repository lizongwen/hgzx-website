<template>
	<div class="detail_13">
		<div class="header">“惠国征信杯”运动会乒乓球、扑克掼蛋比赛圆满落幕</div>
		<div class="nav">
			<p class="left">发布日期：2016-11-18</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<p class="p1">为丰富全市信息化行业从业人员的文体生活，强身健体，增进各单位间的交流联系，芜湖市信息化协会于2016年11月26-27日举办第八届“惠国征信杯”运动会乒乓球、扑克掼蛋比赛。信息化协会各会员单位及个人会员、信息化行业相关单位共计近160名运动员参加比赛，运动会集趣味性、协作性和竞争性于一体，既有力量的角逐，也有智慧的较量，运动员热情参与、积极交流并乐在其中，比赛圆满落幕。</p>
		<div class="img"><img :src="detail_131" /></div>
		<p class="p3">惠国征信行政财务中心郭总对运动会致辞</p>
		<div class="img"><img :src="detail_132" /></div>
		<p class="p3">芜湖市信息办主任承孝敏宣布运动会开幕</p>
		<p class="p1">据悉，掼蛋扑克比赛前三名分别被市民服务中心、市环保局和市联通公司代表队摘取；乒乓球团体比赛前三甲分别被金融信息化协会、飞泰网络科技公司、皖医附二院和第四人民医院代表队摘得。运动员本着友谊第一、比赛第二的原则，圆满完成比赛。</p>
		<div class="img"><img :src="detail_133" /></div>
		<p class="p3">掼蛋比赛正在进行激烈角逐</p>
		<div class="img"><img :src="detail_134" /></div>
		<p class="p3">乒乓球比赛正在紧张进行中</p>
		<div class="img"><img :src="detail_135" /></div>
		<p class="p3">惠国征信乒乓球代表队合影</p>
		<p class="p1">本届运动会由惠国征信服务股份有限公司冠名协办，惠国征信于今年7月20日在国家工商总局注册成立，公司核心团队来自美国邓白氏、IBM、中科院、ISN国家重点实验室等国内外一流机构，拥有中国市场及全球领域丰富的金融及征信行业经验，公司董事长兼CEO徐慧囝博士在人总行、APEC、世界银行、IFC等国际组织均有广泛的影响力。</p>
		<p class="p1">按照《社会信用体系建设规划纲要（2014-2020 年）》要求，惠国征信致力于政务信用、中小企业征信以及农业征信产品，创新性引入“动产的不动产化”最前沿物联网征信技术，服务政府部门、商业机构以及市场主体，立足芜湖、辐射全国，全面推进政务诚信、商务诚信、社会诚信和司法公信建设，立志打造中国社会信用体系的样板和具有广阔前景的商业征信模式，成为中国最领先的高端综合性征信服务机构。</p>
		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_131 from './img/new12-1.jpg';
	import detail_132 from './img/new12-2.jpg';
	import detail_133 from './img/new12-3.jpg';
	import detail_134 from './img/new12-4.jpg';
	import detail_135 from './img/new12-5.jpg';
	export default {
		props: ['newsDetail'],
		data: function() {
			return {
				detail_131: detail_131,
				detail_132: detail_132,
				detail_133: detail_133,
				detail_134: detail_134,
				detail_135: detail_135,
			};
		},
	};
</script>

<style lang="less" scoped>
	.detail_13 {
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
			width: 350px;
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
			width: 600px;
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