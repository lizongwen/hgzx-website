<template>
	<div class="detail_6">
		<div class="header">惠国征信徐慧囝总裁应邀参加第八届国际创新管理信息与生产研讨会</div>
		<div class="nav">
			<p class="left">发布日期：2017-06-02</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<div class="p1">2017年6月2日，由日本早稻田大学国际管理工程师学会和台北中国创新信息与应用统计协会联合主办，安徽师范大学、台北政治大学、浙江工商学院承办的“第八届国际创新管理信息与生产研讨会”隆重举办，日本早稻田大学、台湾政治大学、中国人民大学、安徽师范大学等国内外知名学府的专家学者参与了此次研讨会。</div>
		<div class="img"><img :src="detail_61" /></div>
		<div class="img"><img :src="detail_62" /></div>
		<div class="p2">安徽师范大学副校长朱家存教授致开幕词</div>
		<div class="img"><img :src="detail_63" /></div>
		<div class="p2">日本早稻田大学知识工程和软计算与管理工程Junzo Watada教授做专题报告</div>
		<div class="p1">惠国征信董事长兼总裁徐慧囝博士作为大数据领域信用信息学专家也受邀参加此次研讨会，并做“基于大数据的信用评级理论与实践”专题报告，全程流利英文阐述大数据已成为一种资产广泛应用于经济社会的各个领域，并从互联网+大数据征信、中小微企业金融征信两个领域内大数据的实践与应用，阐述了惠国征信在中小微企业信用服务中评级模型的设计思路和具体对策，以及核心金融技术的应用实践与前景，赢得与会嘉宾高度赞赏。</div>
		<div class="img"><img :src="detail_64" /></div>
		<div class="p2">惠国征信董事长兼总裁徐慧囝博士做专题报告</div>
		<div class="p1">会议加强了业界的交流与合作，对于国际新形势下信息与生产领域的创新管理和发展具有重要意义。</div>
		<div class="hr2"></div>
	</div>
</template>

<script>
import detail_61 from './img/new19-1.jpg';
import detail_62 from './img/new19-2.jpg';
import detail_63 from './img/new19-3.jpg';
import detail_64 from './img/new19-4.jpg';
export default {
	props:['newsDetail'],
	data: function() {
			return {
				detail_61: detail_61,
				detail_62: detail_62,
				detail_63: detail_63,
				detail_64: detail_64,
				
				
			};
		},
};
</script>

<style lang="less" scoped>
  .detail_6 {
  	   .hr1{
  	   	    margin-top: 40px;
		    margin-bottom: 10px;
		    border: 0;
		    border-top: 1px solid #eee;
		}
		.header {
			font-size: 18px;
			text-align:center;
			margin-bottom: 5px;
			color: #b62a31;
		}
		.nav {
			width: 540px;
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
			font-size: 16px;
		  	text-indent: 2em;
		  	padding-bottom:5px ;
		  	line-height: 1.75;
		  	color: #888;
		}
		.p2{
			font-size: 16px;
		  	text-align: center;
		  	
		}
		.hr2{
  	   	    margin-top: 20px;
		    margin-bottom: 10px;
		    border: 0;
		    border-top: 1px solid #eee;
		}
	}
</style>

