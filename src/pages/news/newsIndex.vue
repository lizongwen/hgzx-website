<template>
	<div class="company-news">
		<ul class="news-wrapper" v-show="showList">
			<li class="clearfix" v-for="(item,index) in news" :key="index" @click="showDetail(index)">
				<div class="title">{{item.title}}</div>
				<div class="time">{{item.date}}</div>
			</li>
		</ul>
		<div v-show="!showList">
			<news-detail :newsDetail="newsDetail"></news-detail>
			<div @click="backList">返回列表</div>
		</div>
	</div>
</template>

<script>
import newsDetail from "./newsDetail";
export default {
  name: "company-news",
  data: function() {
    return {
      showList: true,
      news: [
        {
          typeid: 1,
          id: "1001",
          type: "公司动态",
          date: "2017-05-05",
          title: "公司动态公司动态111111111111111111111111111",
          detail:
            "公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1公司动态1"
        },
        {
          typeid: 1,
          id: "1002",
          type: "公司动态",
          date: "2017-05-05",
          title: "公司动态公司动态22222222222222222222222222",
          detail:
            "公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2公司动态2"
        },
        {
          typeid: 1,
          id: "1003",
          type: "公司动态",
          date: "2017-05-05",
          title: "公司动态公司动态3333333333333333333333",
          detail:
            "公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3公司动态3"
        },
        {
          typeid: 1,
          id: "1004",
          type: "公司动态",
          date: "2017-05-05",
          title: "公司动态公司动态44444444444444444444444444444",
          detail:
            "公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4公司动态4"
        }
      ],
      newsDetail: {}
    };
  },
  methods: {
    showDetail(index) {
      this.showList = false;
      this.newsDetail = this.news[index];
    },
    backList() {
      this.showList = true;
    }
  },
  components: {
    newsDetail
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
    .title {
      float: left;
    }
    .time {
      float: right;
    }
  }
}
</style>

