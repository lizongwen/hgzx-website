<template>
	<div class="financial">
		<div class="main">
			<div class="top">
				<span class="text">首页&nbsp;>&nbsp; 金融征信</span>
			</div>
			<div class="list clearfix">
				<div class="list-left">
					<ul>
						<li>
							<span>
								<router-link to="/government/benevolent" class="link">惠政信用服务平台</router-link>
							</span>
							<div class="line"></div>
						</li>
						<li>
							<span>
								<router-link to="/government/supervise" class="link">互金监管平台</router-link>
							</span>
							<div class="line"></div>
						</li>
						<li>
							<span>
								<router-link to="/government/system" class="link">社会信用体系建设</router-link>
							</span>
							<div class="line"></div>
						</li>
					</ul>
				</div>
				<div class="list-right">
					<router-view/>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
  name: "financial",
  data: function() {
    return {};
  },
   beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$emit("setNav", to.meta.index);
    });
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 1000px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  .top {
    position: relative;
    height: 30px;
    padding: 4px 15px;
    margin: 18px 0 28px;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    background: rgb(179, 27, 36);
    .text {
      vertical-align: middle;
      font-size: 12px;
    }
  }
  .list {
    .list-left {
      float: left;
      width: 200px;
      color: #010101;
      text-align: left;
      .link.active {
        color: #b31b24;
      }
      li {
        color: 16px;
        span {
          padding-left: 27px;
        }
        .caret {
          position: absolute;
          right: 3rem;
          top: 1.5rem;
          border-top: 5px solid transparent;
          border-right: 5px solid;
          border-bottom: 5px solid transparent;
          border-left: 5px solid transparent;
        }
      }
      .line {
        border-bottom: 1px #e5e3e0 solid;
        padding-top: 16px;
        margin-bottom: 16px;
        width: 80%;
      }
    }
    .list-right {
      float: left;
      width: 800px;
      .describe {
        font-size: 16px;
        line-height: 1.75;
      }
      img {
        margin: 0 0px 17px 22px;
      }
    }
  }
}
</style>