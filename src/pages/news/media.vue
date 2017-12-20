<template>
	<div class="company-news">
		<ul class="news-wrapper" v-show="showList">
			<li class="clearfix" v-for="(item,index) in news" :key="index" @click="showDetail(index)">
				<div class="title">{{item.title}}</div>
				<div class="time">{{item.date}}</div>
			</li>
		</ul>
		<div v-show="!showList">
			<component :is="current"></component>
			<div @click="backList">返回列表</div>
		</div>
	</div>
</template>

<script>
	import newsDetail1 from "./media/newsDetail1";
	import newsDetail2 from "./media/newsDetail2";
	import newsDetail3 from "./media/newsDetail3";
	 import newsDetail4 from "./media/newsDetail4";
	 import newsDetail5 from "./media/newsDetail5";
	 import newsDetail6 from "./media/newsDetail6";
	 import newsDetail7 from "./media/newsDetail7";
	 import newsDetail8 from "./media/newsDetail8";
	export default {
		name: "company-news",
		components: {
			newsDetail1: newsDetail1,
			newsDetail2: newsDetail2,
			newsDetail3: newsDetail3,
			newsDetail4: newsDetail4,
			 newsDetail5: newsDetail5,
			 newsDetail6: newsDetail6,
			 newsDetail7: newsDetail7,
			 newsDetail8: newsDetail8,
		},
		data: function() {
			return {
				current: "newsDetail1",
				showList: true,
				news: [{
						typeid: 1,
						id: "1001",
						date: "2017-03-21",
						title: "1芜湖新闻联播：惠国征信助力社会信用体系建设",
					},
					{
						typeid: 1,
						id: "1002",
						date: "2017-03-15",
						title: "2芜湖新闻网头条新闻：执着博士助力芜湖信用体系示范城市建设",
					},
					{
						name: "newsDetail3",
						typeid: 1,
						id: "1003",
						date: "2017-03-09",
						title: "3《大江晚报》信用专栏载文：惠国征信助力构建社会信用体系",
					},
					{
						typeid: 1,
						id: "1004",
						date: "2017-03-08",
						title: "4《芜湖日报》头版载文：“惠政平台”助力芜湖信用示范城市建设",
					},
					{
						typeid: 1,
						id: "1005",
						date: "2017-01-25",
						title: "5《芜湖日报》载文“扎根芜湖创新创业，征信事业惠国利民”",
					},
					{
						typeid: 1,
						id: "1006",
						date: "2017-01-04",
						title: "6惠国征信助力芜湖创建信用示范城市取得初步成效",
					},
					{
						typeid: 1,
						id: "1007",
						date: "2016-11-01",
						title: "7中国征信技术获APEC会议肯定",
					},
					{
						typeid: 1,
						id: "1008",
						date: "2016-07-14",
						title: "8跨境征信将在中国内地开展业务试点",
					},
				],
				newsDetail: {}
			};
		},
		methods: {
			showDetail: function(current) {
				console.log(current);
				this.showList = false;
				this.newsDetail = this.news[current];
				this.current = "newsDetail" + (current + 1);
			},
			backList() {
				this.showList = true;
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				if(to.params.id) {
					vm.showDetail(to.params.id);
				}
			});
		},
		mounted: function() {
			this.$emit("setCrumb", "媒体报道");
		}
	};
</script>

<style lang="less" scoped>
	.company-news {
		.news-wrapper {
			li {
				font-size: 16px;
				border-bottom: 1px #7d7a74 dashed;
				color: #7d7a74;
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