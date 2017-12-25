<template>
	<div class="system">
		<div class="system-left">
			<p class="title-big">居民感知</p>
			<p class="title-small">
				个人信用好坏直接影响到生活中的各个方面，信用不好寸步难行。信用好有很多便利和优惠。
			</p>
			<p class="title-big">企业感知</p>
			<p class="title-small  title-small_2">
				信用好的企业办事特别容易，处处都有便利，且在商业活动中减少了很多的交易成 本和风险。 信用不好的企业感觉处处收到限制，经营成本提高。如果继续保持不好的信用状 态很快就会被市场所淘汰。
			</p>
			<div class="title-small">
				信用不好的企业感觉处处收到限制，经营成本提高。如果继续保持不好的信用状 态很快就会被市场所淘汰。
			</div>
			<p class="title-big">信用好的环境</p>
			<p class="title-small">市场主体在心理上首先认可和遵守市场经济的交易制度和秩序，这种认可表 明了市场经济主体重视信誉、注重形象、彼此尊重、诚实守信。信用作为一 种约束人们行为的道德准则，体现的是人们的价值观和伦理理念，良好的信 用环境给人们带来心理上的信任感和安全感。
			</p>

		</div>
		<div class="system-right">
			<div class="img1"><img :src="system_1" /></div>
		</div>
	</div>
</template>

<script>
	import system_1 from '../img/shtx.png';
	export default {
		data: function() {
			return {
				system_1: system_1,
			};
		},

	};
</script>

<style lang="less" scoped>
	.system {
		.system-left {
			width: 500px;
			float: left;
			.title-big {
				font-weight: 500;
				font-size: 16px;
				color: #92c5d7;
				padding-bottom: 10px;
				span {
					font-size: 12px;
					color: #96938D;
				}
			}
			.title-small {
				font-size: 16px;
				padding-bottom: 20px;
			}
			.title-small_2 {
				padding-bottom: 0px;
			}
		}
		.system-right {
			width: 300px;
			float: left;
			.img1 {
				margin-top: 30px;
				padding-bottom: 15px;
			}
		}
	}
</style>