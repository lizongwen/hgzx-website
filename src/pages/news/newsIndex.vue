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
			<div @click="backList" class="footer">返回列表</div>
		</div>
	</div>
</template>

<script>
	import newsDetail1 from "./newsDetail/newsDetail1";
	import newsDetail2 from "./newsDetail/newsDetail2";
	import newsDetail3 from "./newsDetail/newsDetail3";
	import newsDetail4 from "./newsDetail/newsDetail4";
	import newsDetail5 from "./newsDetail/newsDetail5";
	import newsDetail6 from "./newsDetail/newsDetail6";
	import newsDetail7 from "./newsDetail/newsDetail7";
	import newsDetail8 from "./newsDetail/newsDetail8";
	import newsDetail9 from "./newsDetail/newsDetail9";
	import newsDetail10 from "./newsDetail/newsDetail10";
	import newsDetail11 from "./newsDetail/newsDetail11";
	import newsDetail12 from "./newsDetail/newsDetail12";
	import newsDetail13 from "./newsDetail/newsDetail13";
	import newsDetail14 from "./newsDetail/newsDetail14";
	import newsDetail15 from "./newsDetail/newsDetail15";
	import newsDetail16 from "./newsDetail/newsDetail16";
	import newsDetail17 from "./newsDetail/newsDetail17";
	import newsDetail18 from "./newsDetail/newsDetail18";
	import newsDetail19 from "./newsDetail/newsDetail19";
	import newsDetail20 from "./newsDetail/newsDetail20";
	import newsDetail21 from "./newsDetail/newsDetail21";
	import newsDetail22 from "./newsDetail/newsDetail22";
	import newsDetail23 from "./newsDetail/newsDetail23";
	import newsDetail24 from "./newsDetail/newsDetail24";
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
			newsDetail15: newsDetail15,
			newsDetail16: newsDetail16,
			newsDetail17: newsDetail17,
			newsDetail18: newsDetail18,
			newsDetail19: newsDetail19,
			newsDetail20: newsDetail20,
			newsDetail21: newsDetail21,
			newsDetail22: newsDetail22,
			newsDetail23: newsDetail23,
			newsDetail24: newsDetail24,
		},
		data: function() {
			return {
				current: "newsDetail1",
				showList: true,
				news: [{
						typeid: 1,
						id: "1001",
						date: "2017-09-06",
						title: "芜湖新闻频道“丹丹面对面”栏目邀请惠国征信徐博士谈征信",
					},
					{
						typeid: 1,
						id: "1002",
						date: "2017-08-09",
						title: "惠国征信举办《建模方法论SEMMA建模路径》培训",
					},
					{
						name: "newsDetail3",
						typeid: 1,
						id: "1003",
						date: "2017-07-07",
						title: "惠国征信董事长兼总裁徐慧囝博士应邀参加台州市第三期大数据论坛",
					},
					{
						typeid: 1,
						id: "1004",
						date: "2017-06-23",
						title: "热烈祝贺惠国征信中标芜湖市信用服务应用平台建设项目",
					},
					{
						typeid: 1,
						id: "1005",
						date: "2017-06-09",
						title: "热烈祝贺惠国征信中标芜湖市互联网金融在线综合监管平台建设项目",
					},
					{
						typeid: 1,
						id: "1006",
						date: "2017-06-02",
						title: "惠国征信徐慧囝总裁应邀参加第八届国际创新管理信息与生产研讨会",
					},
					{
						typeid: 1,
						id: "1007",
						date: "2017-05-22",
						title: "惠国征信徐慧囝总裁应邀参加芜湖市“区域金融中心建设与金融人才培养”高层座谈会",
					},
					{
						typeid: 1,
						id: "1008",
						date: "2017-04-10",
						title: "惠国征信董事长徐慧囝博士受邀担任芜湖市人社局创业展示活动专家评审",
					},
					{
						typeid: 1,
						id: "1009",
						date: "2017-01-11",
						title: "惠国征信率先践行芜湖市政府“校地合作”战略",
					},
					{
						typeid: 1,
						id: "1010",
						date: "2016-12-16",
						title: "惠国征信“富媒体大数据深度集成联合实验室”举行揭牌仪式",
					},
					{
						typeid: 1,
						id: "1011",
						date: "2016-12-15",
						title: "惠国征信应邀参加内蒙古“一带一路供应链金融大数据论坛",
					},
					{
						typeid: 1,
						id: "1012",
						date: "2016-12-01",
						title: "芜湖市主流媒体同仁莅临惠国征信考察交流",
					},
					{
						typeid: 1,
						id: "1013",
						date: "2016-11-28",
						title: "13“惠国征信杯”运动会乒乓球、扑克掼蛋比赛圆满落幕",
					},
					{
						typeid: 1,
						id: "1014",
						date: "2016-11-24",
						title: "“芜湖市中小企业诚信经营联盟”成立大会顺利召开",
					},
					{
						typeid: 1,
						id: "1015",
						date: "2016-11-17",
						title: "15国家社会信用体系建设中期评估组一行莅临惠国征信视察指导",
					},
					{
						typeid: 1,
						id: "1016",
						date: "2016-11-11",
						title: "惠国征信董事长兼总裁徐慧囝博士获批被正式聘请为ISN国家重点实验室教授",
					},
					{
						typeid: 1,
						id: "1017",
						date: "2016-11-09",
						title: "邓白氏原亚太区总裁、现任世界银行顾问Lawrence Yee先生访问惠国征信",
					},
					{
						typeid: 1,
						id: "1018",
						date: "2016-11-03",
						title: "芜湖市公安局网安支队莅临惠国征信指导网络安全工作",
					},
					{
						typeid: 1,
						id: "1019",
						date: "2016-11-02",
						title: "惠国征信将成为芜湖市信息化协会会员单位",
					},
					{
						typeid: 1,
						id: "1020",
						date: "2016-10-31",
						title: "惠国征信徐慧囝博士受邀作芜湖市委中心组征信专题报告",
					},
					{
						typeid: 1,
						id: "1015",
						date: "2016-10-25",
						title: "惠国征信与民强担保共同推动召开“芜湖市中小企业信用担保贷款推介会”",
					},
					{
						typeid: 1,
						id: "1016",
						date: "2016-10-25",
						title: "惠国征信主导发起成立芜湖市中小企业诚信经营联盟",
					},
					{
						typeid: 1,
						id: "1009",
						date: "2016-10-21",
						title: "徐慧囝总裁领军惠国征信，荣获中国大数据领域重磅奖项",
					},
					{
						typeid: 1,
						id: "1015",
						date: "2016-08-25",
						title: "潘市长会见惠国征信服务有限公司",
					}
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
			this.$emit("setCrumb", "公司动态");
		}
	};
</script>

<style lang="less" scoped>
	.company-news {
		.news-wrapper {
			li {
				font-size: 16px;
				border-bottom: 1px #7d7a74 dotted;
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
			.footer {
				position: relative;
				bottom: 20px;
				color: #777;
			}
		}
	}
</style>