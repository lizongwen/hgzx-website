<template>
	<div class="banking">
		<div class="left">
			<div class="left_1">
				<p class="nianfen">2010年11月</p>
				<p>中国光大银行中小企业业务发展总体规划实施</p>
			</div>
			<div class="left_2">
				<p class="nianfen">2011年4月</p>
				<p>中国中信银行中小企业评级模型建设</p>
			</div>
			<div class="left_3">
				<p class="nianfen">2012年6月</p>
				<p>澳大利亚个人信用评级模型</p>
			</div>
			<div class="left_4">
				<p class="nianfen">2013年3月</p>
				<p>邓白氏大中华区逾期预测评分CDS</p>
			</div>
			<div class="left_5">
				<p class="nianfen">2014年4月</p>
				<p>西班牙国家企业违约概率模型FFS</p>
			</div>
			<div class="left_6">
				<p class="nianfen">2014年12月</p>
				<p>罗氏诊断经销商合规体系</p>
			</div>
		</div>
		<div class="img"><img :src="banking_1" /></div>
		<div class="right">
			<div class="right_1">
				<p>2010年8月</p>
				<p>招商银行经营性个人信贷业务营销咨询服务项目</p>
			</div>
			<div class="right_2">
				<p>2011年3月</p>
				<p>邓白氏中国新兴市场EMMA风险预警评分</p>
			</div>
			<div class="right_3">
				<p>2012年1月</p>
				<p>香港中小企业征信局运营</p>
			</div>
			<div class="right_4">
				<p>2012年7月</p>
				<p>日本中小企业违约概率评级模型</p>
			</div>
			<div class="right_5">
				<p>2014年1月</p>
				<p>台湾地区违约概率模型TW-FFS</p>
			</div>
			<div class="right_6">
				<p>2014年9月</p>
				<p>渣打银行中小企业指数产品</p>
			</div>
			<div class="right_7">
				<p>2015年1月</p>
				<p>筹建浙江省第四家征信公司温州中新力合征信</p>
			</div>
		</div>
	</div>
</template>

<script>
	import banking_1 from '../img/tree.png';
	export default {
		data: function() {
			return {
				banking_1: banking_1,
			};
		},

	};
</script>

<style lang="less" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.banking {
		margin-bottom: 23px;
		.left {
			float: left;
			/*position: relative;*/
			width: 280px;
			font-size: 14px;
			.left_1 {
				float: right;
				position: relative;
				top: 75px;
				right: 5px;
				.nianfen {
					position: relative;
					left: 207px;
				}
			}
			.left_2 {
				position: relative;
				top: 145px;
				right: 5px;
				left: 55px;
				.nianfen {
					position: relative;
					left: 157px;
				}
			}
			.left_3 {
				position: relative;
				top: 215px;
				left:110px;
				.nianfen {
					position: relative;
					left: 102px;
				}
			}
			.left_4 {
				position: relative;
				top: 282px;
				left:70px;
				.nianfen {
					position: relative;
					left: 140px;
				}
			}
			.left_5 {
				position: relative;
				top: 352px;
				left: 70px;
				.nianfen {
					position: relative;
					left: 140px;
				}
			}
			.left_6 {
				position: relative;
				top: 445px;
				left: 125px;
				.nianfen {
					position: relative;
					left:80px;
				}
			}
		}
		.img {
			float: left;
		}
		.right {
			float: left;
			/*position: relative;*/
			font-size: 14px;
			.right_1 {
				position: relative;
				top: 15px;
				left: 5px;
			}
			.right_2 {
				position: relative;
				top: 85px;
				left: 5px;
			}
			.right_3 {
				position: relative;
				top: 155px;
				left: 5px;
			}
			.right_4 {
				position: relative;
				top: 225px;
				left: 5px;
			}
			.right_5 {
				position: relative;
				top: 295px;
				left: 5px;
			}
			.right_6 {
				position: relative;
				top: 385px;
				left: 5px;
			}
			.right_7 {
				position: relative;
				top: 455px;
				left: 5px;
			}
		}
	}
</style>