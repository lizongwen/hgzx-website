<template>
	<div class="main">
		<div class="main-list">
			<div class="top">
				<span class="text">关于惠国
					<small>About us</small>
				</span>
				<span class="fa fa-angle-right"></span>
			</div>
			<router-link to="/about/introduce" class="about">
				<img class="logo" :src="logo_jpg" alt="惠国Logo">
				<div class="content">
					<p class="title">{{about.title}}</p>
					<div class="describe">
						<p class="text-indent">{{about.summary}}</p>
						<p class="detail text-indent">{{about.detail}}</p>
					</div>
				</div>
			</router-link>
		</div>
		<div class="main-list">
			<div class="top">
				<span class="text">公司动态
					<small>Company news</small>
				</span>
				<span class="fa fa-angle-right"></span>
			</div>
			<div class="news">
				<ul>
					<li class="news-item" v-for="(item,index) in news" :key="index" @click="showNews(index)">
						<div class="title">新闻标题</div>
						<p class="text-indent detail">
							国征信服务股份有限公司（以下简称“惠 国征信”）是由芜湖市政府主导推动，芜湖市信 息办、金融办、信用办联合引领的以国征信服务股份有限公司（以下简称“惠 国征信”）是由芜湖市政府主导推动，芜湖市信 息办、金融办、信用办联合引领的以国征信服务股份有限公司（以下简称“惠 国征信”）是由芜湖市政府主导推动，芜湖市信 息办、金融办、信用办联合引领的以
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="main-list">
			<div class="top">
				<span class="text">征信服务
					<small>Credit information service</small>
				</span>
				<span class="fa fa-angle-right"></span>
			</div>
			<div class="service">
				<ul>
					<li class="service-item" v-for="(item,index) in service" :key="index">
						<div class="avatar">
							<img :src="item.imgUrl">
						</div>
						<div class="content">
							<div class="title">新闻标题</div>
							<p class="text-indent detail">
								国征信服务股份有限公司（以下简称“惠 国征信”）是由芜湖市政府主导推动，芜湖市信 息办、金融办、信用办联合引领的以国征信服务股份有限公司（以下简称“惠 国征信”）是由芜湖市政府主导推动，芜湖市信 息办、金融办、信用办联合引领的以国征信服务股份有限公司（以下简称“惠 国征信”）是由芜湖市政府主导推动，芜湖市信 息办、金融办、信用办联合引领的以
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import avatar_index_01 from "./img/avatar_index_01.jpg";
import avatar_index_02 from "./img/avatar_index_02.jpg";
import logo_jpg from "./img/logo.jpg";
export default {
  data: function() {
    return {
      logo_jpg: logo_jpg,
      about: {
        title: "惠国简介",
        summary: `惠国征信服务股份有限公司（以下简称“惠国征信”）是由芜湖市政府主导推动，
				芜湖市信息办、金融办、信用办联合引领的以征信平台为载体、致力于政务信用、
				中小企业征信以及农业征信等多元化征信产品服务，以金融大数据和商业物联网大数据为基础的综合性高端征信业服务机构。`,
        detail: `惠国征信于2016年7月20日在国家工商管理总局正式注册，注册资本5000万元，主要股东是惠国投资管理合伙企业、
				芜湖市民强融资担保（集团）有限公司、安徽讯飞智能科技有限公司、安徽中电兴发与鑫龙科技股份有限`
      },
      news: [
        {
          id: 1,
          content: ""
        },
        {
          id: 2,
          content: ""
        },
        {
          id: 3,
          content: ""
        }
      ],
      service: [
        {
          imgUrl: avatar_index_01
        },
        {
          imgUrl: avatar_index_02
        }
      ]
    };
  },
  methods: {
    showNews: function(index) {
      this.$router.push("/news/index/" + index);
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  padding: 35px 0 44px;
  justify-content: space-between;
  .main-list {
    width: 320px;
    .top {
      position: relative;
      padding: 8px 15px;
      border-radius: 5px;
      color: rgb(255, 255, 255);
      background: rgb(179, 27, 36);
      .text {
        vertical-align: middle;
        font-size: 16px;
        small {
          margin-left: 10px;
        }
      }
      .fa-angle-right {
        position: absolute;
        right: 10px;
        font-size: 21px;
      }
    }
    .about,
    .news,
    .service {
      height: 364px;
    //   -moz-height: 364px;
      overflow: hidden;
    }
    .about {
      overflow: hidden;
      display: block;
      .logo {
        margin: 9px 5px;
      }
      .content {
        padding: 0 5px;
        .title {
          font-size: 16px;
        }
        .describe {
          font-size: 14px;
          line-height: 1.75;
          .detail {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
    .news {
      .news-item {
        position: relative;
        max-height: 92px;
        overflow: hidden;
        margin: 25px 0 30px;
        padding: 0 5px;
        cursor: pointer;
        &:hover {
          color: #b31b24;
        }
        &:last-child {
          margin-bottom: 0;
        }
        &::after {
          content: "";
          position: absolute;
          bottom: -15px;
          border-bottom: 2px dashed #e2e2e2;
          width: 100%;
        }
        .title {
          font-weight: bold;
        }
        .detail {
          overflow: hidden;
          line-height: 1.75;
          font-size: 14px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
    .service {
      .service-item {
        display: flex;
        margin: 15px 0;
        padding: 0 5px;
        &:last-child {
          margin-bottom: 0;
        }
        .avatar {
          flex: 1;
        }
        .content {
          flex: 1;
          margin-left: 10px;
          .title {
            font-weight: bold;
          }
          .detail {
            overflow: hidden;
            line-height: 1.75;
            font-size: 14px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}
</style>
