<template>
	<div class="detail_17">
		<div class="header">邓白氏原亚太区总裁、现任世界银行顾问Lawrence Yee先生访问惠国征信</div>
		<div class="nav">
			<p class="left">发布日期：2016-11-09</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<p class="p1">邓白氏原亚太区总裁、现任世界银行顾问、国际信息行业协会董事、香港产业孵化基金会主席Lawrence Yee先生于11月9日访问惠国征信服务股份有限公司。</p>
		<div class="img"><img :src="detail_171" /></div>
		<p class="p3">Lawrence先生与惠国征信全体员工合影</p>
		<p class="p1">芜湖市委副书记、市政府市长潘朝晖同志亲切会见了Lawrence先生，代表芜湖市政府对Lawrence先生的到来表示热烈欢迎。惠国征信徐慧囝总裁陪同潘市长会见，并率领公司高管团队对Lawrence先生进行热情接待。</p>
		<p class="p1">Lawrence先生代表邓白氏集团，受香港金融管理局委托, 亲自创立了香港中小企业征信局和 泰国国家征信局。从2002年起，Lawrence先生协助中国人民银行建设运营征信管理局, 并直接参与了《征信业管理条例》的立法工作，最早于1996年, 陪同邓白氏国际业务部总裁 Joachim Bartels先生参与了与朱镕基总理的会谈，为推动中国的征信行业开放、加入WTO扫清金融基础设施建设的法律障碍。</p>
		<div class="img"><img :src="detail_172" /></div>
		<p class="p3">1996年,朱镕基总理与邓白氏国际业务部总裁 Joachim Bartels先生会谈</p>
		<p class="p1">Lawrence先生对芜湖市创建社会信用体系建设示范城市所做的工作表示积极的认同和赞赏，并表示信用体系建设是大势所趋，社会信用体系的建立和完善是我国社会主义市场经济不断走向成熟的重要标志之一。</p>
		<p class="p1">Lawrence先生在访问惠国征信时，对惠国征信的成立表示祝贺，并对徐慧囝总裁带领惠国征信团队在成立初期所做的一系列征信工作表示大加赞赏。在参观时，恰逢公司正在举办11月员工生日会，Lawrence先生亲切和大家一起为员工过生日，对惠国征信和谐的企业文化氛围表示非常肯定，并预祝惠国征信在徐慧囝总裁的坚强带领下大展宏图，不断创造佳绩。</p>
		<div class="img"><img :src="detail_173" /></div>
		<div class="img"><img :src="detail_174" /></div>
		<div class="img"><img :src="detail_175" /></div>
		<p class="p3">Lawrence先生亲切参加惠国征信员工生日会</p>
		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_171 from './img/new8-1.jpg';
	import detail_172 from './img/new8-2.jpg';
	import detail_173 from './img/new8-3.jpg';
	import detail_174 from './img/new8-4.jpg';
	import detail_175 from './img/new8-5.jpg';
	export default {
		props: ['newsDetail'],
		data: function() {
			return {
				detail_171: detail_171,
				detail_172: detail_172,
				detail_173: detail_173,
				detail_174: detail_174,
				detail_175: detail_175,
			};
		},
	};
</script>

<style lang="less" scoped>
	.detail_17 {
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