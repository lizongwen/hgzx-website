<template>
	<div class="topic">
		<ul class="news-wrapper" v-show="showList">
			<li class="clearfix" v-for="(item,index) in news" :key="index" @click="showDetail(index)">
				<div class="title">{{item.title}}</div>
				<div class="time">{{item.date}}</div>
			</li>
		</ul>
		<div v-show="!showList">
			<news-detail :newsDetail="newsDetail"></news-detail>
			<!-- 内容:{{currentDetail.detail}} -->
			<div @click="backList">返回列表</div>
		</div>
	</div>
</template>

<script>
	import newsDetail from "./newsDetail";
	export default {
		name: "media-news",
		data: function() {
			return {
				showList: true,
				news: [{
						typeid: 2,
						id: "2001",
						type: "征信专题",
						date: "2017-05-05",
						title: "征信专题111111111111111111111111111",
						detail: "征信专题11111111111111111111111111111"
					},
					{
						typeid: 2,
						id: "2002",
						type: "征信专题",
						date: "2017-05-05",
						title: "征信专题22222222222222222222222222222",
						detail: "征信专题222222222222222222222222222222222"
					},
					{
						typeid: 2,
						id: "2003",
						type: "征信专题",
						date: "2017-05-05",
						title: "征信专题33333333333333333333333333",
						detail: "征信专题333333333333333333333333333"
					},
					{
						typeid: 2,
						id: "2004",
						type: "征信专题",
						date: "2017-05-05",
						title: "征信专题44444444444444",
						detail: "征信专题4444444444444444444444444444444444444444444444"
					}
				],
				newsDetail: {}
			};
		},
		methods: {
			showDetail(index) {
				this.showList = false;
				this.newsDetail = news[index];
			},
			backList() {
				this.showList = true;
			}
		},
		components: {
			newsDetail
		},
		mounted: function() {
			this.$emit('setCrumb', '征信专题')
		}
	};
</script>

<style lang="less" scoped>
	.topic {
		.news-wrapper {
			li {
				font-size: 16px;
				border-bottom: 1px #7D7A74 dashed;
				color: #7D7A74;
				padding-bottom: 12px;
				text-indent: 1.5em;
				div {
					margin-top: 12px;
				}
			}
			.title {
				float: left;
			}
			.time {
				float: right;
			}
		}
	}
</style>