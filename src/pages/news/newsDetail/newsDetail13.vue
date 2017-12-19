<template>
	<div class="detail_3">
		<div class="header">芜湖市政府发布中小企业信用贷试点工作实施意见</div>
		<div class="nav">
			<p class="left">发布日期：2017-07-12</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<div class="p1">为更好的实现信用贷项目的落地和执行，提高团队整体专业技能，拓宽学习和工作思路，2017年8月4日下午，惠国征信开展了《建模方法论之——SEMMA建模路径》内部专题培训，由董事长兼总裁徐慧囝博士全程授课，并邀请了芜湖市信用办、市社会信用服务中心、市大数据管理中心相关领导莅临公司指导交流。</div>
		<!--<div class="p1">背景：全国信用体系建设进入新高潮</div>-->
		<div class="p1">为进一步深化金融改革，提升金融服务实体经济发展能力，有效化解中小企业融资难、融资贵问题，市政府经研究，决定在我市开展中小企业信用贷款试点工作，并于2017年7月10日发布了《芜湖市人民政府关于中小企业信用贷试点工作的实施意见》（芜政秘〔2017〕161 号），对中小企业信用贷试点工作实施提出规范意见</div>
		<div class="p1">意见中提到，试点期暂定两年（2017 年—2018 年）。到 2017 年末，力争参加试点的企业超过 500 家，实现融资 10 亿元左右，初步构建中小企业信用融资新机制；到2018年末，力争参加试点的企业超过1000家，实现融资 20 亿元以上，基本建成基于大数据的信用融资新模式。在我市注册登记、具有独立法人资格、符合我市产业发展政策且有新增贷款需求的中小企业均可参加试点。单户企业授信贷款额度原则上不超过 2000 万元，限于流动资金贷款，期限不超过 1 年。</div>
		<div class="p1">意见中还提到，引进或培育2家以上在我市设立具有独立法人资格的大数据征信服务机构，鼓励其按照市场化原则参与中小企业信用贷试点工作，不断完善评级模型及方法，为企业提供方便、快捷的征信服务，出具客观、真实的信用评级报告，作为合作银行授信的主要依据。这就意味着，基于大数据征信的信用贷融资模式将在我市开启创新融资新篇章。</div>
		<div class="p1">惠国征信作为在芜湖市设立的以金融大数据和商业物联网大数据为基础的综合性征信服务机构，自2016年7月成立以来，积极打造中小企业大数据融资综合服务平台，为配合芜湖市深化金融改革、创新企业融资体系和促进经济社会发展升级奠定了良好的基础，并将全力服务芜湖市政府做好中小企业信用贷试点工作。</div>
		<div class="p1">以下为“意见”全文：</div>
		<div class="img"><img :src="detail_31" /></div>
		<div class="img"><img :src="detail_32" /></div>
		<div class="img"><img :src="detail_33" /></div>
		<div class="img"><img :src="detail_34" /></div>
		<div class="img"><img :src="detail_35" /></div>
		<div class="img"><img :src="detail_36" /></div>
		<div class="img"><img :src="detail_37" /></div>
		<div class="hr2"></div>
	</div>
</template>

<script>
import detail_31 from './img/hangye12-1.jpeg';
import detail_32 from './img/hangye12-2.jpeg';
import detail_33 from './img/hangye12-3.jpeg';
import detail_34 from './img/hangye12-4.jpeg';
import detail_35 from './img/hangye12-5.jpeg';
import detail_36 from './img/hangye12-6.jpeg';
import detail_37 from './img/hangye12-7.jpeg';
export default {
	props:['newsDetail'],
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
  	   .hr1{
  	   	    margin-top: 40px;
		    margin-bottom: 10px;
		    border: 0;
		    border-top: 1px solid #eee;
		}
		.header {
			width: 550px;
			font-size: 24px;
			margin: 0 auto;
			margin-bottom: 5px;
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
		.hr2{
  	   	    margin-top: 20px;
		    margin-bottom: 10px;
		    border: 0;
		    border-top: 1px solid #eee;
		}
	}
</style>

