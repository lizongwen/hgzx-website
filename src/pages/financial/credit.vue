<template>
	<div class="credit">
		<div class="credit-left">
			<p>
				围绕进一步深化金融改革，提升金融服务实体经济发展能力，有效化解中小企业融资难、 融资贵问题，惠国征信以中小企业为服务主体，以企业信用信息为基础，以大数据技术为依 托，在全市积极促进探索建立“征信机构+银行+担保”的中小企业信用融资新模式。
			</p>
			<p>
				这种以大数据为基础的信用贷工作，是大数据理论与云计算技术在信用领域的一种革命 性应用，它不完全依赖财务数据分析，也逐步摒弃了传统金融机构依赖偏主观的专业经验进 行企业贷前尽调，而是通过先进的物联网技术，创建一个大批量、高效能、全风控、低成本 的信用评价模式，创立具有客观依据的信用评级模型，有效化解中小微企业会计信息失真， 不仅可以开展成批量的企业信用评价，而且还大大降低了企业融资的门槛，使其获得真正的 信用贷款。
			</p>
			<p>
				从2016年下半年起，惠国征信就全力配合芜湖市政府在意见起草、方案实施、组织调研、 各方协调等方面推进中小企业大数据信用融资试点工作。在信用贷工作中，根据贷前尽调结 果，在企业信用报告中明确建议银行授信额度，弥补了银行在企业200-2000万贷款额度区 间内，对企业尽调不足的空白，在全市乃至全国成为创新之举。
			</p>
		</div>
		<div class="credit-right">
			<div class="img1"><img :src="credit_1" /></div>
		</div>
	</div>
</template>

<script>
	import credit_1 from '../img/credit.png';
	export default {
		data: function() {
			return {
				credit_1: credit_1,
			};
		},

	};
</script>
<style lang="less" scoped>
	.credit {
		.credit-left {
			width: 600px;
			float: left;
			line-height: 26px;
			font-size: 14px;
			text-indent: 2em;
		}
		.credit-right {
			width: 200px;
			height: 100%;
			float: left;
			.img1 {
				padding-bottom: 15px;
			}
		}
	}
</style>