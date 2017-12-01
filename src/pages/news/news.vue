<template>
	<div class="news">
		<Breadcrumb>
			<BreadcrumbItem>首页</BreadcrumbItem>
			<BreadcrumbItem>新闻中心</BreadcrumbItem>
			<BreadcrumbItem>{{current}}</BreadcrumbItem>
		</Breadcrumb>
		<div class="list clearfix">
			<div class="list-left">
				<ul>
					<li>
						<router-link to="/news/index" class="link">公司动态</router-link>
					</li>
					<li>
						<router-link to="/news/media" class="link">媒体报道</router-link>
					</li>
					<li>
						<router-link to="/news/topic" class="link">征信专题</router-link>
					</li>
					<li>
						<router-link to="/news/industry" class="link">行业新闻</router-link>
					</li>
				</ul>
			</div>
			<div class="list-right">
				<router-view v-on:setCrumb="setCrumbName" ref='newsItem'/>
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
  .list {
    .list-left {
      float: left;
      width: 20%;
    }
    .list-right {
      float: left;
      width: 80%;
      padding-left: 20px;
    }
  }
}
</style>

