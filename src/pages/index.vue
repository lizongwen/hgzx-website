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
						<div class="title">{{item.title}}</div>
						<p class="text-indent detail">{{item.content}}</p>
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
							<router-link :to="item.url">
								<div class="title">{{item.title}}</div>
								<p class="text-indent detail">{{item.content}}</p>
							</router-link>
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
        title: "",
        summary: `惠国征信服务股份有限公司（以下简称“惠国征信”）是由芜湖市政府主导推动，
				芜湖市信息办、金融办、信用办联合引领的以征信平台为载体、致力于政务信用、
				中小企业征信以及农业征信等多元化征信产品服务，以金融大数据和商业物联网大数据为基础的综合性高端征信业服务机构。`,
        detail: `惠国征信于2016年7月20日在国家工商管理总局正式注册，注册资本5000万元，主要股东是惠国投资管理合伙企业、
				芜湖市民强融资担保（集团）有限公司、安徽讯飞智能科技有限公司、安徽中电兴发与鑫龙科技股份有限`
      },
      news: [
        {
          title: "芜湖新闻频道“丹丹面对面”栏目邀请惠国征信徐博士谈征信",
          id: 1,
          content: `为更好地了解芜湖市社会信用体系建设现状，2017年9月5日上午，
		  芜湖新闻频道“丹丹面对面”栏目特邀惠国征信服务股份有限公司董事长兼总裁徐慧囝博士进入演播室，从征信公司的视角，围绕征信建设的宏观背景、
		  全市信用贷开展情况和惠国征信团队介绍等方面，全面解读芜湖市社会信用体系建设情况。`
        },
        {
          title: "惠国征信举办《建模方法论SEMMA建模路径》培训",
          id: 2,
          content: `为更好的实现信用贷项目的落地和执行，提高团队整体专业技能，拓宽学习和工作思路，2017年8月4日下午，
		  惠国征信开展了《建模方法论之——SEMMA建模路径》内部专题培训，
		  由董事长兼总裁徐慧囝博士全程授课，并邀请了芜湖市信用办、市社会信用服务中心、市大数据管理中心相关领导莅临公司指导交流。`
        },
        {
          title: "惠国征信董事长兼总裁徐慧囝博士应邀参加台州市第三期大数据论坛",
          id: 3,
          content: `2017年7月6日晚，台州市“大数据”第3期论坛《信用大数据》会议在台州市应急指挥中心大楼三楼大厅举办，本次活动是台州市应急指挥中心大楼建成首次启用，台州市发改委徐贤军副主任，市经信委信息化处王锦林处长，李林欢副处长，市政府应急办陈炜华主任，市委市政府信息中心陈友增主任参加会议。本次活动由浙江移动台州分公司，台州市信息化促进会共同主办`
        }
      ],
      service: [
        {
          url: "/financial/credit",
          title: "金融征信",
          imgUrl: avatar_index_01,
		  content: `围绕进一步深化金融改革，提升金融服务实体经济发展能力，有效化解中小企业融资难、 融资贵问题，
		  惠国征信以中小企业为服务主体，以企业信用信息为基础，
		  以大数据技术为依 托，在全市积极促进探索建立“征信机构+银行+担保”的中小企业信用融资新模式。`
        },
        {
          url: "/government/benevolent",
          title: "政务征信",
          imgUrl: avatar_index_02,
          content: `国征信服务股份有限公司（以下简称“惠 国征信”）是由芜湖市政府主导推动，芜湖市信 息办、金融办、
			信用办联合引领的以国征信服务股份有限公司（以下简称“惠 国征信”）是由芜湖市政府主导推动，
			芜湖市信 息办、金融办、信用办联合引领的以国征信服务股份有限公司（以下简称“惠 国征信”）
			是由芜湖市政府主导推动，芜湖市信 息办、金融办、信用办联合引领的以`
        }
      ]
    };
  },
  methods: {
    showNews: function(index) {
      this.$router.push("/news/index/" + "detail_" + index);
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
          &:hover {
            color: #b31b24;
          }
          .detail {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
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
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
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
          display: flex;
          flex: 1;
          align-items: center;
        }
        .content {
          flex: 1;
          margin-left: 10px;
          .title {
            font-weight: bold;
          }
          .detail {
            overflow: hidden;
            max-height: 141px;
            line-height: 1.75;
            font-size: 14px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            &:hover {
              color: #b31b24;
            }
          }
        }
      }
    }
  }
}
</style>
