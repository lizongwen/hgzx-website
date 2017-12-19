<template>
	<div class="news">
		<div class="top">
			<span class="text">首页&nbsp;>&nbsp; 新闻中心&nbsp; > &nbsp;{{current}}</span>
		</div>
		<div class="list clearfix">
			<div class="list-left">
				<ul>
					<li>
						<span>
								<router-link to="/news/index" class="link">公司动态</router-link>
							</span>
						<div class="line"></div>
					</li>
					<li>
						<span>
								<router-link to="/news/media" class="link">媒体报道</router-link>
							</span>
						<div class="line"></div>
					</li>
					<li>
						<span>
								<router-link to="/news/topic" class="link">征信专题</router-link>
							</span>
						<div class="line"></div>
					</li>
					<li>
						<span>
								<router-link to="/news/industry" class="link">行业新闻</router-link>
							</span>
						<div class="line"></div>
					</li>
				</ul>
			</div>
			<div class="list-right">
				<router-view v-on:setCrumb="setCrumbName" ref='newsItem' />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "news",
		data: function() {
			return {
				current: "公司动态"
			};
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.$emit("setNav", to.meta.index);
			});
		},
		methods: {
			setCrumbName: function(name) {
				this.current = name;
			}
		}
	};
</script>

<style lang="less" scoped>
	.news {
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
				width: 200px;
				color: #010101;
				text-align: left;
				.link.active {
					color: #b31b24;
				}
				li {
					color: 16px;
					span {
						padding-left: 27px;
					}
					.caret {
						position: absolute;
						right: 3rem;
						top: 1.5rem;
						border-top: 5px solid transparent;
						border-right: 5px solid;
						border-bottom: 5px solid transparent;
						border-left: 5px solid transparent;
					}
				}
				.line {
					border-bottom: 1px #e5e3e0 solid;
					padding-top: 16px;
					margin-bottom: 16px;
					width: 80%;
				}
			}
			.list-right {
				float: left;
				width: 80%;
				margin-bottom: 33px;
			}
		}
	}
</style>