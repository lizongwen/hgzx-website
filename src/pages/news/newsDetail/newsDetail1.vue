<template>
	<div class="detail_1">
		<div class="header">芜湖新闻频道“丹丹面对面”栏目邀请惠国征信徐博士谈征信</div>
		<div class="nav">
			<p class="left">发布日期：2017-09-06</p>
			<p class="right">发布人：惠国征信</p>
		</div>
		<div class="hr1"></div>
		<div class="p1">为更好地了解芜湖市社会信用体系建设现状，2017年9月5日上午，芜湖新闻频道“丹丹面对面”栏目特邀惠国征信服务股份有限公司董事长兼总裁徐慧囝博士进入演播室，从征信公司的视角，围绕征信建设的宏观背景、全市信用贷开展情况和惠国征信团队介绍等方面，全面解读芜湖市社会信用体系建设情况。</div>
		<div class="img"><img :src="detail_1" /></div>
		<div class="p2">背景：全国信用体系建设进入新高潮</div>
		<div class="p1">在谈到征信建设的宏观背景时，徐博士表示，诚信建设是推进社会主义核心价值体系建设的重要组成部分，从2014年6月国务院印发《社会信用体系建设规划纲要（2014—2020年）》起，全国掀起信用体系建设新高潮，各省市都争先部署加快建设社会信用体系、构筑诚实守信的经济社会环境。</div>
		<div class="p1">2015年7月，国家发改委、中国人民银行共同发文将芜湖市等11个城市列为全国首批创建社会信用体系建设示范城市，在2015年12月，芜湖市政府即发布《关于创建社会信用体系建设示范城市的实施意见》（芜市办〔2015〕49 号），部署全市社会信用体系建设工作。到2016年，芜湖市已初步完成了社会信用体系的基础建设，顺利完成国家社会信用体系建设评估组中期验收。</div>
		<div class="p2">最专业的征信团队</div>
		<div class="p1">在访谈中，徐博士还谈到，惠国征信作为由芜湖市政府主导发起的以金融科技为载体、以征信服务为核心的高端服务业企业，从2016年7月20日成立以来，引入最前沿物联网征信技术，通过技术研发、模型算法、数据运营和IoT实验室等基础建设支撑，建立服务政府管理的惠政信用服务平台，促进建设全市社会信用体系，帮助提高政府管理效能、降低社会管理成本，促进智慧城市转型升级；建设互联网金融监管平台，补充金融监管体系，提高金融监管效率，维护金融稳定和社会稳定；打造中小企业大数据融资综合服务平台，创新企业融资体系，配合深化金融改革，促进经济社会发展升级。</div>
		<div class="p2">全市中小企业大数据信用贷工作迅速开展</div>
		<div class="p1">2017年7月，习近平在全国金融工作会议上强调，必须紧紧围绕服务实体经济、防控金融风险、深化金融改革三项任务，创新和完善金融调控，健全现代金融企业制度，完善金融市场体系，促进经济和金融良性循环、健康发展。</div>
		<div class="p1">在深化金融改革工作中，芜湖走在全国前列。从2017年4月起，惠国征信就全力配合芜湖市政府推进中小企业大数据信用融资试点工作，这是践行深化金融改革、创新融资模式、提升金融服务实体经济发展能力的创新举措，能够切实加快建设中小企业融资和风险管理体系，缓解中小企业融资难题。</div>
		<div class="p1">到今年7月10日，芜湖市政府正式出台《芜湖市人民政府关于中小企业信用贷试点工作的实施意见》（芜政秘〔2017〕161 号），建立银行、大数据信用服务机构、企业三方市场化合作机制。截至目前，全市已有493家企业在惠国征信注册在案申请信用贷融资，惠国征信已调查走访290家申请企业，并已服务60多家企业生成大数据信用报告，全力以赴推进信用贷工作进度。</div>
		<div class="p2">我们的愿景</div>
		<div class="p1">访谈尾声，徐慧囝博士表示，今后，惠国征信将立足芜湖、辐射全国，为地方和全国经济社会发展构建良好的信用环境，做好当下，不忘初心！</div>
		<div class="p1"></div>
		<div class="hr2"></div>
	</div>
</template>

<script>
import detail_1 from './img/new24-1.png';
export default {
	props:['newsDetail'],
	data: function() {
			return {
				detail_1: detail_1,
			};
		},
};
</script>

<style lang="less" scoped>
  .detail_1 {
  	   .hr1{
  	   	    margin-top: 40px;
		    margin-bottom: 10px;
		    border: 0;
		    border-top: 1px solid #eee;
		}
		.header {
			width: 620px;
			font-size: 24px;
			margin: 0 auto;
			margin-bottom: 5px;
		}
		.nav {
			width: 620px;
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
		  	height: 420px;
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

