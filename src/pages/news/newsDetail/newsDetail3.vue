<template>
	<div class="detail_3">
		<div class="header">惠国征信董事长兼总裁徐慧囝博士应邀参加台州市第三期大数据论坛</div>
		<div class="nav">
			<p class="left">发布日期：2017-07-07</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<p class="p1">2017年7月6日晚，台州市“大数据”第3期论坛《信用大数据》会议在台州市应急指挥中心大楼三楼大厅举办，本次活动是台州市应急指挥中心大楼建成首次启用，台州市发改委徐贤军副主任，市经信委信息化处王锦林处长，李林欢副处长，市政府应急办陈炜华主任，市委市政府信息中心陈友增主任参加会议。本次活动由浙江移动台州分公司，台州市信息化促进会共同主办。</p>
		<div class="img"><img :src="detail_31" /></div>
		<div class="img"><img :src="detail_32" /></div>
		<p class="p1">惠国征信服务股份有限公司董事长兼总裁徐慧囝博士应邀出席会议，并与现场专家分享了大数据在风险管理中的应用、大数据基础设施和条件的达成路径、国外领先实践的经验与问题、中小微金融服务关键难题及解决思路，并介绍了几个鲜活的案例，最后为台州的大数据发展提供了建设技术路径的建议，具有很强的指导意义。</p>
		<div class="img"><img :src="detail_33" /></div>
		<div class="img"><img :src="detail_34" /></div>
		<p class="p3">惠国征信董事长兼总裁徐慧囝博士“大数据信用评级的理论与实践”主题演讲</p>
		<p class="p1">下面来看会议精彩瞬间：</p>
		<div class="img"><img :src="detail_35" /></div>
		<p class="p3">台州市委市政府信息中心陈友增主任与大家分享学习大数据心得</p>
		<div class="img"><img :src="detail_36" /></div>
		<p class="p3">浙江大学专家朱华飞教授“大数据安全与可持续发展产业”主题演讲</p>
		<div class="img"><img :src="detail_37" /></div>
		<p class="p3" >移动专家云枫“台州信用大数据平台建设及应用实践”主题演讲</p>
		

		<div class="hr2"></div>
	</div>
</template>

<script>
	import detail_31 from './img/new22-1.jpeg';
	import detail_32 from './img/new22-2.jpeg';
	import detail_33 from './img/new22-3.jpeg';
	import detail_34 from './img/new22-4.jpeg';
	import detail_35 from './img/new22-5.jpeg';
	import detail_36 from './img/new22-6.jpeg';
	import detail_37 from './img/new22-7.jpeg';
	export default {
		props: ['newsDetail'],
		data: function() {
			return {
				detail_31: detail_31,
				detail_32: detail_32,
				detail_33: detail_33,
				detail_34: detail_34,
				detail_35: detail_35,
				detail_36: detail_36,
				detail_37: detail_37,

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
			width: 400px;
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
			color:  #c8c8c8;
		}
		.hr2 {
			margin-top: 20px;
			margin-bottom: 10px;
			border: 0;
			border-top: 1px solid #eee;
		}
	}
</style>