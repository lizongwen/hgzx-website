<template>
	<div class="contact">
		<div class="top">
			<span class="text">首页&nbsp;>&nbsp; 招贤纳士</span>
		</div>
		<div class="list clearfix">
			<div class="list-left">
				<div class="add">
					<div class="media-left"><img :src="information_1" /></div>
					<div class="media-right">
						<h4 class="media-heading">地址：</h4>
						<div>
							<span>中国芜湖市镜湖区银湖南路8号星隆国际城A座17层</span>
						</div>
					</div>
				</div>
				<div class="tel">
					<div class="media-left"><img :src="information_2" /></div>
					<div class="media-right">
						<h4 class="media-heading">电话：</h4>
						<div>
							<span>+86-0553-5801256</span>
						</div>
					</div>
				</div>
				<div class="wx">
					<div class="media-left"><img :src="information_3" /></div>
					<div class="media-right">
						<h4 class="media-heading">微信公众号：</h4>
						<div class="weixin">
							<img :src="information_4" />
						</div>
					</div>
				</div>
            </div>
			<div class="list-right">
				<b-map-component></b-map-component>
			</div>
		</div>
	</div>
</template>

<script>
	import information_1 from './img/addr.png';
	import information_2 from './img/tel.png';
	import information_3 from './img/weixin.png';
	import information_4 from './img/contact-erweima.png';
	import BMapComponent from '../components/bmap/BMapComponent.vue'
	export default {
		name: 'contact',
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.$emit('setNav', to.meta.index)
			})
		},
		data: function() {
			return {
				information_1: information_1,
				information_2: information_2,
				information_3: information_3,
				information_4: information_4,
			};
		},
		components: {
			BMapComponent
		}
	};
</script>

<style lang="less" scoped>
	.contact {
		width: 1000px;
		margin: 0 auto;
		.top {
			position: relative;
			height: 30px;
			padding: 4px 15px;
			margin: 18px 0 28px;
			border-radius: 5px;
			color: rgb(255, 255, 255);
			background: rgb(179, 27, 36);
			.text {
				vertical-align: middle;
				font-size: 12px;
			}
		}
		.list {
			.list-left {
				float: left;
				width: 40%;
				.add {
					height:80px;
					.media-left {
						float: left;
						height: 20px;
						width: 20px;
						margin: 10px 5px;
					}
					.media-right {
						float: left;
						font-size: 14px;
						vertical-align: middle;
						margin-left: 10px;
					}
				}
				.tel {
					height:80px;
					.media-left {
						float: left;
						height: 20px;
						width: 20px;
						margin: 10px 5px;
					}
					.media-right {
						float: left;
						font-size: 14px;
						vertical-align: middle;
						margin-left: 10px;
					}
				}
				.wx {
					height:160px;
					.media-left {
						float: left;
						height: 20px;
						width: 20px;
						margin: 10px 5px;
					}
					.media-right {
						float: left;
						font-size: 14px;
						vertical-align: middle;
						margin-left: 10px;
					}
				}
			}
			.list-right {
				float: left;
				width: 60%;
				padding-left: 20px;
				margin-bottom: 20px;
				#allmap{
					height: 340px ;
				}
			}
		}
	}
</style>