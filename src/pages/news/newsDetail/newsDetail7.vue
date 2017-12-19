<template>
	<div class="detail_3">
		<div class="header">惠国征信徐慧囝总裁应邀参加芜湖市“区域金融中心建设与金融人才培养”高层座谈会</div>
		<div class="nav">
			<p class="left">发布日期：2017-06-13</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<div class="p1">2017年5月20日，由芜湖市人民政府、安徽工程大学主办，芜湖市金融办、芜湖市金融学会、安徽工程大学数理学院承办的"芜湖区域金融中心建设与金融人才培养高层座谈会"隆重举办，近300名省内外专家学者、政府官员、金融学会会员、安工程师生参加了座谈会。</div>
		<div class="img"><img :src="detail_81" /></div>
		<div class="p2">中共芜湖市市委常委、副市长曹哨兵致辞发言</div>
		<div class="p1">惠国征信董事长兼总裁徐慧囝博士受邀参加座谈会，并做“数里烁金—大数据信用评级的理论与实践”专题演讲，阐述了大数据从过去作为商业智能在企业经营管理层面的广泛应用，过渡到成为一种资产广泛应用于经济社会的各个领域，且将成为未来社会的趋势和主流。同时，他还从互联网+大数据征信、中小微企业金融征信两个领域内大数据的实践与应用，阐述了惠国征信在中小微企业信用服务中评级模型的设计思路和具体对策，以及核心金融技术的应用实践与前景，赢得与会嘉宾高度赞赏。</div>
		<div class="img"><img :src="detail_72" /></div>
		<div class="p2">惠国征信董事长兼总裁徐慧囝博士做“数里烁金—大数据信用评级的理论与实践”专题报告</div>
		<div class="img"><img :src="detail_73" /></div>
		<div class="p2">财政部综合司骆晓强处长作《当前我国经济金融形势》主旨报告</div>
		<div class="img"><img :src="detail_74" /></div>
		<div class="p2">中国科学院数学与系统科学研究院杨晓光研究员作《基于跨行大数据的企业风险行为和信贷风险管理》报告</div>
		<div class="img"><img :src="detail_75" /></div>
		<div class="p2">山东大学经济学院李铁岗教授作《数据互联网时代区域金融发展与创新》主旨报告</div>
		<div class="img"><img :src="detail_76" /></div>
		<div class="p2">中国人民银行芜湖市中心支行副行长高勇作《金融创新下的风险防范策略》专题报告</div>
		<div class="img"><img :src="detail_77" /></div>
		<div class="p2">惠国征信服务股份有限公司董事长兼总裁徐慧囝博士作“数里烁金—大数据信用评级的理论与实践”专题报告</div>
		<div class="img"><img :src="detail_78" /></div>
		<div class="p2">中国人民健康保险芜湖分公司总经理叶青作《聚焦大病困难群众，发挥专业健康保险优势》专题报告</div>
		<div class="img"><img :src="detail_79" /></div>
		<div class="p2">奇瑞徽银汽车金融股份有限公司董事长曹运文作《汽车金融现状与未来》专题报告</div>
		<div class="p1">会议加强了学术界、业界的交流与合作，业内专家深度交流金融研究领域的最新进展，对于进一步推进芜湖市区域金融中心建设与深化改革环境下的金融创新与风险管理具有重要意义，取得了圆满成功。

		</div>
		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_81 from './img/new17-1.jpg';
	import detail_72 from './img/new18-2.jpg';
	import detail_73 from './img/new18-3.jpg';
	import detail_74 from './img/new18-4.jpg';
	import detail_75 from './img/new18-5.jpg';
	import detail_76 from './img/new18-6.jpg';
	import detail_77 from './img/new18-7.jpg';
	import detail_78 from './img/new18-8.jpg';
	import detail_79 from './img/new18-9.jpg';
	export default {
		props: ['newsDetail'],
		data: function() {
			return {
				detail_81: detail_81,
				detail_72: detail_72,
				detail_73: detail_73,
				detail_74: detail_74,
				detail_75: detail_75,
				detail_76: detail_76,
				detail_77: detail_77,
				detail_78: detail_78,
				detail_79: detail_79

			};
		},
	};

</script>

<style lang="less" scoped>
	.detail_3 {
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
			width: 660px;
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
		.hr2 {
			margin-top: 20px;
			margin-bottom: 10px;
			border: 0;
			border-top: 1px solid #eee;
		}
	}
</style>