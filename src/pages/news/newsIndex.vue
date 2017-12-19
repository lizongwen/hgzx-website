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
import newsDetail1 from "./newsDetail/newsDetail1";
import newsDetail2 from "./newsDetail/newsDetail2";
import newsDetail3 from "./newsDetail/newsDetail3";
// import newsDetail4 from "./newsDetail/newsDetail4";
// import newsDetail5 from "./newsDetail/newsDetail5";
// import newsDetail6 from "./newsDetail/newsDetail6";
// import newsDetail7 from "./newsDetail/newsDetail7";
// import newsDetail8 from "./newsDetail/newsDetail8";
// import newsDetail9 from "./newsDetail/newsDetail9";
// import newsDetail10 from "./newsDetail/newsDetail10";
export default {
  name: "company-news",
  components: {
    newsDetail1: newsDetail1,
    newsDetail2: newsDetail2,
    newsDetail3: newsDetail3
    // newsDetail4: newsDetail4,
    // newsDetail5: newsDetail5,
    // newsDetail6: newsDetail6,
    // newsDetail7: newsDetail7,
    // newsDetail8: newsDetail8,
    // newsDetail9: newsDetail9,
    // newsDetail10: newsDetail10,
  },
  data: function() {
    return {
      current: "newsDetail1",
      showList: true,
      news: [
        {
          typeid: 1,
          id: "1001",
          type: "公司动态",
          date: "2017-05-05",
          title: "芜湖新闻频道“丹丹面对面”栏目邀请惠国征信徐博士谈征信",
          detail:
            "<p>公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1</p>"
        },
        {
          typeid: 1,
          id: "1002",
          type: "公司动态",
          date: "2017-05-05",
          title: "惠国征信举办《建模方法论SEMMA建模路径》培训",
          detail:
            "公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2"
        },
        {
          name: "newsDetail3",
          typeid: 1,
          id: "1003",
          type: "公司动态",
          date: "2017-05-05",
          title: "惠国征信董事长兼总裁徐慧囝博士应邀参加台州市第三期大数据论坛",
          detail:
            "公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3"
        },
        {
          typeid: 1,
          id: "1004",
          type: "公司动态",
          date: "2017-05-05",
          title: "热烈祝贺惠国征信中标芜湖市信用服务应用平台建设项目",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1005",
          type: "公司动态",
          date: "2017-05-05",
          title: "热烈祝贺惠国征信中标芜湖市互联网金融在线综合监管平台建设项目",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1006",
          type: "公司动态",
          date: "2017-05-05",
          title: "惠国征信徐慧囝总裁应邀参加第八届国际创新管理信息与生产研讨会",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1007",
          type: "公司动态",
          date: "2017-05-05",
          title: "惠国征信徐慧囝总裁应邀参加芜湖市“区域金融中心建设与金融人才培养”高层座谈会",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1008",
          type: "公司动态",
          date: "2017-05-05",
          title: "惠国征信董事长徐慧囝博士受邀担任芜湖市人社局创业展示活动专家评审",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1009",
          type: "公司动态",
          date: "2017-05-05",
          title: "惠国征信率先践行芜湖市政府“校地合作”战略",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1009",
          type: "公司动态",
          date: "2016-12-06",
          title: "惠国征信“富媒体大数据深度集成联合实验室”举行揭牌仪式",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1010",
          type: "公司动态",
          date: "2017-05-05",
          title: "惠国征信率先践行芜湖市政府“校地合作”战略",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1011",
          type: "公司动态",
          date: "2016-12-16",
          title: "惠国征信应邀参加内蒙古“一带一路供应链金融大数据论坛”",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1012",
          type: "公司动态",
          date: "2017-05-05",
          title: "芜湖市主流媒体同仁莅临惠国征信考察交流",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1009",
          type: "公司动态",
          date: "2017-05-05",
          title: "惠国征信率先践行芜湖市政府“校地合作”战略",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1009",
          type: "公司动态",
          date: "2017-05-05",
          title: "惠国征信率先践行芜湖市政府“校地合作”战略",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1009",
          type: "公司动态",
          date: "2017-05-05",
          title: "惠国征信率先践行芜湖市政府“校地合作”战略",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        },
        {
          typeid: 1,
          id: "1009",
          type: "公司动态",
          date: "2017-05-05",
          title: "惠国征信率先践行芜湖市政府“校地合作”战略",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
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
      if (to.params.id) {
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