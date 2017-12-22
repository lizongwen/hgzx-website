<template>
	<div class="detail_19">
		<div class="header">惠国征信将成为芜湖市信息化协会会员单位</div>
		<div class="nav">
			<p class="left">发布日期：2016-11-03</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<p class="p1">2016年11月1日下午，芜湖市信息化协会领导一行来访惠国征信，总裁徐慧囝博士率领公司高管团队热情接待协会一行。</p>
		<div class="img"><img :src="detail_191" /></div>
		<p class="p1">会谈期间，双方就芜湖市信息化产业发展问题进行了深入交流与探讨。徐慧囝博士详细向协会领导介绍了惠国征信的公司概况和发展现状，协会领导高度赞赏与肯定了惠国征信在积极协助芜湖市创建社会主义信用体系建设示范城市过程中发挥的作用，殷切希望惠国征信加入芜湖市信息化协会，成为协会会员，共同助力芜湖市信息化产业发展。</p>
		<div class="img"><img :src="detail_192" /></div>
		<p class="p1">在协会领导的热情邀请下，惠国征信表示将非常愿意加入协会，并致力于为芜湖市乃至全省信息化产业的发展，承担更多的责任，贡献更多的力量。</p>
		<div class="img"><img :src="detail_193" /></div>
		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_191 from './img/new6-1.jpg';
	import detail_192 from './img/new6-2.jpg';
	import detail_193 from './img/new6-3.jpg';
	export default {
		props: ['newsDetail'],
		data: function() {
			return {
				detail_191: detail_191,
				detail_192: detail_192,
				detail_193: detail_193,
			};
		},
	};
</script>

<style lang="less" scoped>
	.detail_19 {
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
			width: 340px;
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
			width: 250px;
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