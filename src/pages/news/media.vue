<template>
	<div class="media">
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
      news: [
        {
          typeid: 2,
          id: "2001",
          type: "媒体动态",
          date: "2017-05-05",
          title: "媒体动态111111111111111111111111111",
          detail: "媒体动态11111111111111111111111111111"
        },
        {
          typeid: 2,
          id: "2002",
          type: "媒体动态",
          date: "2017-05-05",
          title: "媒体动态22222222222222222222222222222",
          detail: "媒体动态222222222222222222222222222222222"
        },
        {
          typeid: 2,
          id: "2003",
          type: "媒体动态",
          date: "2017-05-05",
          title: "媒体动态33333333333333333333333333",
          detail: "媒体动态333333333333333333333333333"
        },
        {
          typeid: 2,
          id: "2004",
          type: "媒体动态",
          date: "2017-05-05",
          title: "媒体动态44444444444444",
          detail: "媒体动态4444444444444444444444444444444444444444444444"
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
	  this.$emit('setCrumb','媒体报道');
  }
};
</script>

<style lang="less" scoped>
.media {
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

