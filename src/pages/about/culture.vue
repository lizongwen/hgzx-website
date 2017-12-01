<template>
	<div class="culture">
		<div class="culture-left">
			<p class="title-big">企业理念 <span>Company Philosophy</span></p>
			<p class="title-small">以信惠国、以智惠政、以诚惠商、以利惠农、以礼惠民</p>
			<p class="title-big">企业愿景 <span> Our Vison</span></p>
			<p class="title-small">打造业内卓越精英团队，树立国内顶级行业标杆，成就国际高端服务品牌</p>
			<p class="title-big">企业使命<span>Our Mission</span></p>
			<p class="title-small">运用现代征信技术，构建社会信用体系，促进社会经济发展</p>
			<p class="title-big">核心价值观 <span> Core Values </span></p>
			<p class="title-small">尊重、自律、务实、尽职、分享</p>
			<p class="title-big">发展理念 <span>Organization Development </span></p>
			<p class="title-small">创建政务信用体系，完善商业信用体系，补充金融信用体系</p>
		</div>
		<div class="culture-right">
			<div class="img1"><img :src="culture_1" /></div>
			<div class="img2"><img :src="culture_2" /></div>
		</div>
	</div>
</template>

<script>
	import culture_1 from '../img/logo-right.png';
	import culture_2 from '../img/img-right.png';
	export default {
		data: function() {
			return {
				culture_1: culture_1,
				culture_2: culture_2,
			};
		},

	};
</script>

<style lang="less" scoped>
	.culture {
		.culture-left {
			width: 500px;
			float:left;
			.title-big {
				font-weight: 500;
				font-size: 16px;
				color: #CD0000;
				padding-bottom: 10px;
				span {
					font-size: 12px;
					color: #96938D;
				}
			}
			.title-small {
				font-size: 14px;
				padding-bottom: 20px;
			}
		}
		.culture-right {
			width: 300px;
			float: left;
		.img1 {
			padding-bottom: 15px;
		}
		}
	}
</style>