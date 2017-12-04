<template>
	<div class="header" :style="{background:headerBg}">
		<div class="nav clearfix">
			<div class="logo-wrapper">
				<img :src="logourl" alt="公司logo">
			</div>
			<div class="menu">
				<Menu mode="horizontal" :active-name="activeName">
					<MenuItem name="1">
					<router-link to="/" class="link">首页</router-link>
					</MenuItem>
					<Submenu name="2">
						<template slot="title">
							关于惠国
						</template>
						<MenuItem name="2-1">
						<router-link to="/about/introduce" class="sub-link">惠国简介</router-link>
						</MenuItem>
						<MenuItem name="2-2">
						<router-link to="/about/honor" class="sub-link">荣誉资质</router-link>
						</MenuItem>
						<MenuItem name="2-3">
						<router-link to="/about/culture" class="sub-link">企业文化</router-link>
						</MenuItem>
						<MenuItem name="2-4">
						<router-link to="/about/partner" class="sub-link">合作伙伴</router-link>
						</MenuItem>
					</Submenu>
					<Submenu name="3">
						<template slot="title">
							新闻中心
						</template>
						<MenuItem name="3-1">
						<router-link to="/news/index" class="sub-link">公司动态</router-link>
						</MenuItem>
						<MenuItem name="3-2">
						<router-link to="/news/media" class="sub-link">媒体报道</router-link>
						</MenuItem>
						<MenuItem name="3-3">
						<router-link to="/news/topic" class="sub-link">征信专题</router-link>
						</MenuItem>
						<MenuItem name="3-4">
						<router-link to="/news/industry" class="sub-link">行业新闻</router-link>
						</MenuItem>
					</Submenu>
					<Submenu name="4">
						<template slot="title">
							金融征信
						</template>
						<MenuItem  name="4-1">
							<router-link to="/financial/credit" class="sub-link">中小企业信用贷</router-link>
						</MenuItem>
						<MenuItem  name="4-2">
							<router-link to="/financial/iot" class="sub-link">IOT贷后监管平台</router-link>
						</MenuItem>
						<MenuItem  name="4-3">
							<router-link to="/financial/banking" class="sub-link">金融行业经验</router-link>
						</MenuItem>
					</Submenu>
					<Submenu name="5">
						<template slot="title">
							政务征信
						</template>
						<MenuItem name="5-1">惠政信用服务平台</MenuItem>
						<MenuItem name="5-2">互联网金融监管平台</MenuItem>
						<MenuItem name="5-3">社会信用体系建设</MenuItem>
					</Submenu>
					<MenuItem name="6">
					<router-link to="/offers" class="link">招贤纳士</router-link>
					</MenuItem>
					<MenuItem name="7">
					<router-link to="/contact" class="link">联系我们</router-link>
					</MenuItem>
				</Menu>
			</div>
		</div>
	</div>
</template>
<script>
import logo from "./img/logo.png";

export default {
  name: "header",
  props: {
    imgHeight: {
      type: Number
    },
    activeName: {
      type: String
    }
  },
  data() {
    return {
      theme1: "light",
      logourl: logo,
	  headerBg: "rgba(255, 255, 255, .3)",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > this.imgHeight - 60) {
        this.headerBg = "rgba(245,245,245,1)";
      } else {
        this.headerBg = "rgba(255, 255, 255, .3)";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  .nav {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .logo-wrapper {
      float: left;
      margin-top: 10px;
    }
    .menu {
      float: left;
      height: 100%;
      margin-left: 30px;
      .ivu-menu {
        .ivu-menu-item {
          font-size: 16px;
          border-bottom: none;
          .link {
            display: block;
          }
        }
      }
      .ivu-menu-light {
        background: transparent;
        &.ivu-menu-horizontal {
          .ivu-menu-item {
            border-bottom: none;
          }
          .ivu-menu-submenu {
            font-size: 16px;
            border-bottom: none;
            .sub-link {
              display: block;
            }
          }
        }
      }
      .ivu-menu-horizontal.ivu-menu-light:after {
        display: none;
      }
    }
  }
}
</style>


