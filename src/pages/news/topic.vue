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
			<a @click="backList">返回列表</a>
		</div>
	</div>
</template>

<script>
	import newsDetail1 from "./topic/newsDetail1";
	import newsDetail2 from "./topic/newsDetail2";
	import newsDetail3 from "./topic/newsDetail3";
	import newsDetail4 from "./topic/newsDetail4";
	export default {
		name: "company-news",
		components: {
			newsDetail1: newsDetail1,
			newsDetail2: newsDetail2,
			newsDetail3: newsDetail3,
			newsDetail4: newsDetail4

		},
		data: function() {
			return {
				current: "newsDetail1",
				showList: true,
				news: [{
						typeid: 1,
						id: "1001",
						date: "2014-07-18",
						title: "《社会信用体系建设规划纲要（20142020年）》",
					},
					{
						typeid: 1,
						id: "1002",
						date: "2014-07-18",
						title: "《征信业管理条例》",
					},
					{
						name: "newsDetail3",
						typeid: 1,
						id: "1003",
						date: "2014-07-18",
						title: "中国征信业发展报告 （2003-2013）",
					},
					{
						typeid: 1,
						id: "1004",
						date: "2017-07-10",
						title: "芜湖市人民政府关于中小企业信用贷试点 工作的实施意见 ",
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
			this.$emit("setCrumb", "征信专题");
		}
	};
</script>

<style lang="less" scoped>
	.company-news {
		.news-wrapper {
			li {
				font-size: 16px;
				color: #7d7a74;
				margin-bottom: 12px;
				border-bottom:1px dotted transparent;
				div {
					margin-top: 12px;
				}
				&:hover{
					transition:all .5s ease-in;
					cursor: pointer;
					border-color: #2d8cf0;
					color:#2d8cf0
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