<template>
	<div class="detail_8">
		<div class="header">惠国征信董事长徐慧囝博士受邀担任芜湖市人社局创业展示活动专家评审</div>
		<div class="nav">
			<p class="left">发布日期：2017-04-10</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<div class="p1">4月初，芜湖市人社局将主持举办“芜湖市青年创业产品展示中心”揭牌暨全市项目路演活动，活动将带领大家进入一个集合全市优秀青年创业产品的展厅，同时给芜湖市民带来最优秀的双创项目。</div>
		<div class="p1">在专家评审环节，活动方邀请惠国征信董事长兼CEO徐慧囝博士担任专家评审之一，对网络投票环节初选的十个创业项目进行专业点评和打分。</div>
		<div class="img"><img :src="detail_81" /></div>
		<div class="p1">经过专家评审，最终选出综合分数排名前三位的创业项目在正式活动中进行路演展示。最后，徐慧囝博士还为活动和创客送上诚挚祝福，预祝此次活动圆满举行。以下为此次活动概况：</div>
		<div class="img"><img :src="detail_82" /></div>
		<div class="p2">一、网络投票环节</div>
		<div class="p1">“芜湖市青年创业产品展示中心”揭牌仪式暨芜湖市双创项目路演活动自报名开始，共计收到来自市县区19个众创空间的27个优秀项目。这些项目由易企网组织整理，并在微信公众号“易企风暴会”中推出线上投票平台。</div>
		<div class="p1">在一周的时间里，线上投票及多渠道传播共获得将近220000次访问，共有42223人为项目投票，评论留言达3500多条，活动火热进行并受到网友热烈追捧。经投票，以下十个项目获得支持票数最多。</div>
		<div class="p3">获得支持票数最多的十个项目</div>
		<div class="p3">繁昌织梦春谷众创空间的道凡生物</div>
		<div class="p3">三山互联网+“源网”众创空间的源网业务</div>
		<div class="p3">青年创客团的智冷服</div>
		<div class="p3">众创汇众创空间的启迪3D打印</div>
		<div class="p3">皖江云众创空间的尚行旅游网</div>
		<div class="p3">WE+众创空间的进化者机器人</div>
		<div class="p3">通全众创（创客）空间的虹点帮网络科技</div>
		<div class="p3">众创汇众创空间的芜湖维安大师信息技术</div>
		<div class="p3">黑云创意谷众创空间的IP Market</div>
		<div class="p3">南陵“创e汇”的信工睿创设计</div>
		<div class="p2">二、专家评审环节</div>
		<div class="p1">活动方邀请了惠国征信服务股份有限公司董事长兼CEO徐慧囝博士、芜湖市推进创业特区工作领导小组办公室相关领导、投资人沈晓繁先生等作为评审专家为获得票数较多的前10个项目进行综合评价。</div>
		<div class="p1">在综合了几项因素后，评选出排名前三位的创业项目，这些项目将在活动中进行路演！</div>
		<div class="p3">最终获得路演机会的项目</div>
		<div class="p3">众创汇众创空间的启迪3D打印</div>
		<div class="p3">三山互联网+“源网”众创空间的源网业务</div>
		<div class="p3">皖江云众创空间的尚行旅游网</div>
		<div class="p3">WE+众创空间的进化者机器人</div>
		<div class="p2">三、活动进行环节</div>
		<div class="p1">芜湖市青年创业产品展示中心”揭牌暨全市项目路演活动详情请期待易企网官方微信公众号“易企风暴会”具体更新……</div>
		<div class="hr2"></div>
	</div>
</template>

<script>
import detail_81 from './img/new17-1.jpg';
import detail_82 from './img/new17-2.jpg';

export default {
	props:['newsDetail'],
	data: function() {
			return {
				detail_81: detail_81,
				detail_82: detail_82,
				
				
			};
		},
};
</script>

<style lang="less" scoped>
  .detail_8 {
  	   .hr1{
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
			width: 580px;
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
		.img{
		  	/*height: 430px;*/
		  	text-align: center;
		}
		.p1{
			font-size:14px;
		  	text-indent: 2em;
		  	padding-bottom:5px ;
		  	line-height: 1.75;
		  	color: #888;
		}
		.p2{
			font-size:14px;
		  	text-align: center;
		  	
		}
		.p3{
			font-size:14px;
		  	text-align: center;
		  	color: #888;
		}
		.hr2{
  	   	    margin-top: 20px;
		    margin-bottom: 10px;
		    border: 0;
		    border-top: 1px solid #eee;
		}
	}
</style>

