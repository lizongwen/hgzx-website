<template>
	<div class="detail_2">
		<div class="header">惠国征信举办《建模方法论SEMMA建模路径》培训</div>
		<div class="nav">
			<p class="left">发布日期：2017-09-06</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<div class="p1">为更好的实现信用贷项目的落地和执行，提高团队整体专业技能，拓宽学习和工作思路，2017年8月4日下午，惠国征信开展了《建模方法论之——SEMMA建模路径》内部专题培训，由董事长兼总裁徐慧囝博士全程授课，并邀请了芜湖市信用办、市社会信用服务中心、市大数据管理中心相关领导莅临公司指导交流。</div>
		<div class="img"><img :src="detail_21" /></div>
		<div class="p1">培训中，徐慧囝博士通过丰富的案例，浅显易懂向大家讲授了数据挖掘方法论——SEMMA。徐博从五个方面（即Sample（数据取样）、Explore（数据特征探索、分析和预处理）、Modify（问题明确化、数据调整和技术选择）、Model（模型的研发、知识的发现）、Assess（模型和知识的综合解释和评价））生动而丰富地为大家阐述如何运用SEMMA建模并有效解决金融风控问题。</div>
		<div class="p1">数据挖掘就是从大量的、不完全的、有噪声的、模糊的、随机的实际应用数据中，提取隐含在其中的、人们事先不知道的、但又是潜在有用的信息和知识的过程。数据挖掘应用是一个解决实际问题的过程，在进行数据挖掘时，不仅要有技术支持，还需要有先进的数据挖掘方法论的支持。</div>
		<div class="img"><img :src="detail_22" /></div>
		<div class="p1">这次系统且对标国际化水准的专业培训，员工表示受益匪浅，今后还希望多举办这样的专业培训。整场学习过程中，我公司员工纪律严明，学习认真，展现出良好的精神风貌，大家不仅提高了专业领域内的认知能力和技术方面的专业能力，而且拓宽了行业内的工作思路，尤其是在有效解决金融风控问题上受到很多启发。我公司越来越重视人才的输入和培养，未来会一如既往的做好各板块员工培训工作，为我公司的人才成长提供足够的肥料和阳光。</div>
		<div class="hr2"></div>
	</div>
</template>

<script>
import detail_21 from './img/new23-1.png';
import detail_22 from './img/new23-2.png';
export default {
	props:['newsDetail'],
	data: function() {
			return {
				detail_21: detail_21,
				detail_22: detail_22,
			};
		},
};
</script>

<style lang="less" scoped>
  .detail_2 {
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
			width: 420px;
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
		  	height: 430px;
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

