<template>
	<div class="detail_20">
		<div class="header">惠国征信徐慧囝博士受邀作芜湖市委中心组征信专题报告</div>
		<div class="nav">
			<p class="left">发布日期：2016-10-31</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<p class="p1">2016年8月27日，芜湖市委中心组举行“战略性新兴产业报告会”，惠国征信服务股份有限公司总经理徐慧囝博士作为受邀人之一，在报告会上作了《征信业历史和现代信用社会》专题报告。芜湖市委副书记，市政府市长潘朝晖主持报告会。</p>
		<div class="img"><img :src="detail_201" /></div>
		<div class="img"><img :src="detail_202" /></div>
		<div class="img"><img :src="detail_203" /></div>
		<p class="p1">徐慧囝博士从“征信业历史及其特点”、“中国现代征信业展望”、“惠国征信介绍”、“芜湖信用体系建设”等四个方面展开演讲，系统阐述了征信业发展起源、国内金融征信和社会征信的发展趋势、惠国征信的使命愿景及业务产品规划、芜湖信用体系建设的目标规划及建设思路。</p>
		<div class="img"><img :src="detail_204" /></div>
		<div class="img"><img :src="detail_205" /></div>
		<p class="p1">潘市长总结说，报告脉络清晰、深入浅出、贴近芜湖征信体系建设实际，具有很强的专业性和实践性，对我市创建社会主义信用体系示范城市、做好新形势下征信建设工作，具有重要的现实意义。</p>
		<p class="p1">市委中心组成员，市人大、市政协负责同志，市直各单位、各县区相关负责同志，驻芜单位、市各民主党派、市属高校党委等负责同志听取了报告。</p>
		<div class="img"><img :src="detail_206" /></div>
		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_201 from './img/new4-1.jpg';
	import detail_202 from './img/new4-2.jpg';
	import detail_203 from './img/new4-3.jpg';
	import detail_204 from './img/new4-4.jpg';
	import detail_205 from './img/new4-5.jpg';
	import detail_206 from './img/new4-6.jpg';
	export default {
		props: ['newsDetail'],
		data: function() {
			return {
				detail_201: detail_201,
				detail_202: detail_202,
				detail_203: detail_203,
				detail_204: detail_204,
				detail_205: detail_205,
				detail_206: detail_206,
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