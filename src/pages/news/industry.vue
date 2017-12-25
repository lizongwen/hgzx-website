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
	import newsDetail1 from "./industry/newsDetail1";
	import newsDetail2 from "./industry/newsDetail2";
	import newsDetail3 from "./industry/newsDetail3";
	import newsDetail4 from "./industry/newsDetail4";
	import newsDetail5 from "./industry/newsDetail5";
	import newsDetail6 from "./industry/newsDetail6";
	import newsDetail7 from "./industry/newsDetail7";
	import newsDetail8 from "./industry/newsDetail8";
	import newsDetail9 from "./industry/newsDetail9";
	import newsDetail10 from "./industry/newsDetail10";
	import newsDetail11 from "./industry/newsDetail11";
	import newsDetail12 from "./industry/newsDetail12";
	import newsDetail13 from "./industry/newsDetail13";
	import newsDetail14 from "./industry/newsDetail14";
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
			newsDetail9: newsDetail9,
			newsDetail10: newsDetail10,
			newsDetail11: newsDetail11,
			newsDetail12: newsDetail12,
			newsDetail13: newsDetail13,
			newsDetail14: newsDetail14,
		},
		data: function() {
			return {
				current: "newsDetail1",
				showList: true,
				news: [{
						typeid: 1,
						id: "1001",
						date: "2017-10-16",
						title: "市长谈信用：五大体系推进芜湖诚信建设制度化",
					},
					{
						typeid: 1,
						id: "1002",
						date: "2017-07-25",
						title: "首届“中国城市信用建设高峰论坛”圆满落幕",
					},
					{
						name: "newsDetail3",
						typeid: 1,
						id: "1003",
						date: "2017-07-12",
						title: "芜湖市政府发布中小企业信用贷试点工作实施意见",
					},
					{
						typeid: 1,
						id: "1004",
						date: "2017-06-29",
						title: "杭州保姆纵火案反思：如何保障雇主知情权",
					},
					{
						typeid: 1,
						id: "1005",
						date: "2017-05-26",
						title: "国家发改委发布信用红黑名单制度征求意见稿",
					},
					{
						typeid: 1,
						id: "1006",
						date: "2017-05-26",
						title: "证监会将设立上市公司“光荣榜”和“黑名单”",
					},
					{
						typeid: 1,
						id: "1007",
						date: "2016-02-08",
						title: "2016年社会信用体系建设十大新闻事件",
					},
					{
						typeid: 1,
						id: "1008",
						date: "2016-12-13",
						title: "全国2016年58余万“老赖”主动履行法律义务",
					}, {
						typeid: 1,
						id: "1009",
						date: "2016-11-30",
						title: "安徽省社会信用体系建设加快推进",
					},
					{
						typeid: 1,
						id: "1010",
						date: "2016-11-01",
						title: "中国490万“失信者”被限制乘坐飞机",
					},
					{
						typeid: 1,
						id: "1011",
						date: "2016-10-24",
						title: "芜湖市住房公积金个人失信行为将有法可依",
					},
					{
						typeid: 1,
						id: "1012",
						date: "2016-10-17",
						title: "央行四个月内第五次出手 重拳整肃征信市场乱象",
					},
					{
						typeid: 1,
						id: "1013",
						date: "2016-10-01",
						title: "用“纳税信用”即可获无抵押贷款 9万余户企业受益",
					},
					{
						typeid: 1,
						id: "1014",
						date: "2016-09-25",
						title: "中国70万A级纳税人享税收便利",
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
			this.$emit("setCrumb", "行业新闻");
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
					transition: all .5s ease-in;
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