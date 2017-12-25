<template>
	<div class="detail_21">
		<div class="header">惠国征信与民强担保共同推动召开“芜湖市中小企业信用担保贷款推介会”</div>
		<div class="nav">
			<p class="left">发布日期：2016-10-25</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<p class="p1">2016年10月24日下午，在芜湖市政府的大力推动和指导下，由芜湖市民强融资担保（集团）有限公司和惠国征信服务股份有限公司共同推动的“芜湖市中小企业信用担保贷款推介会”在市民强担保公司隆重召开。</p>
		<div class="img"><img :src="detail_211" /></div>
		<p class="p1">本次会议的召开，是推动芜湖市创建社会主义信用体系建设示范城市具有典型意义的一步，是芜湖市促进“城市升级、经济升级”双轮驱动的重要一环，是使金融服务贴近中小微企业、为切实解决中小微企业“融资难、融资贵”问题迈出的重要一步。在大数据时代来临的背景下，惠国征信期望通过企业政务数据、内部数据和金融数据，利用“动产的不动产化”国际先进征信技术，对企业的信用情况进行客观公正的评价，解决企业融资过程中信息不对称的问题，创新性发起“信用担保贷款”的模式，解决中小企业融资难、融资贵的问题。会议吸引了来自民强担保及部分商业银行机构推荐的芜湖市近二十家优质中小企业参会。</p>
		<p class="p1">会议首先由市民强担保公司就企业信用担保贷款的背景、意义与目的做了宣讲，强调芜湖市委、市政府高度重视中小企业融资难、融资贵的问题，为了改善中小企业融资困境，利用芜湖市处于全国领先水平的数据归集工作机制，大力推进中小企业信用担保贷款的发展。民强表示企业信用担保数据来源于企业社会征信数据、企业信贷数据及企业内部经营管理数据，惠国征信将据此对于授信企业进行科学的信用等级评分，帮助中小企业向金融机构进行基于银行基准利率的无抵押担保信用贷款，同时，惠国征信公司的数据评分结果还将帮助改善企业内部管理，促进企业长远发展。</p>
		<p class="p1">接着，惠国征信总裁徐慧囝博士就征信大数据和征信工作机制进行了专门介绍，包括公司基于协助芜湖市推动创建社会主义信用体系建设示范城市的成立背景，以及公司自成立以来在政务信用、商务信用、农村征信体系建设方面所做的一系列工作，均受到各方认可。徐博士强调，惠国征信将充分利用授信企业自身的社会、信贷和内部经营数据为企业创造有形的资产，带来“真金白银”的信用贷款。</p>
		<div class="img"><img :src="detail_212" /></div>
		<p class="p1">惠国征信作为发起单位，已联合芜湖市各金融机构和企业服务机构，共同成立“芜湖市中小企业诚信经营联盟”，以扶持中小企业做大做强，促进经济社会持续健康发展，进一步提升城市综合竞争力，在全世界范围打造芜湖中小企业的诚信品牌。</p>
		<p class="p1">徐慧囝博士的专业介绍引起了在座参会企业的浓厚兴趣，各家企业积极参与讨论，就信用贷款数据收集方式、评级标准、贷款额度等相关问题做了深入的交流与讨论。已有数家企业表示想加入诚信经营联盟，共同遵守联盟宗旨，规范诚信经营，共创中小企业融资佳境。</p>
		<div class="img"><img :src="detail_213" /></div>
		<p class="p1">会后，惠国征信将通过筛选7-8家由金融机构推荐的信用评价良好的优质中小企业作为试点，用科学方法和先进征信技术，为企业信用状况进行评级评分，作为企业和金融机构之间重要的征信杠杆，促进企业和金融机构在融资方面达到双赢格局。</p>
        <div class="hr2"></div>
	</div>
</template>

<script>
	import detail_211 from './img/new3-1.png';
	import detail_212 from './img/new3-2.png';
	import detail_213 from './img/new3-3.png';
	export default {
		props: ['newsDetail'],
		data: function() {
			return {
				detail_211: detail_211,
				detail_212: detail_212,
				detail_213: detail_213,
			};
		},
	};
</script>

<style lang="less" scoped>
	.detail_21 {
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
			width: 560px;
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