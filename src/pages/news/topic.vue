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
          type: "征信专题",
          date: "2017-05-05",
          title: "芜湖新闻频道“丹丹面对面”栏目邀请惠国征信徐博士谈征信",
          detail:
            "<p>公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1</p>"
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
    this.$emit("setCrumb", "征信专题");
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
