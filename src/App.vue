<template>
	<div id="app">
		<h-header :imgHeight="imgHeight" :activeName="num"></h-header>
		<div class="swiper-wrapper">
			<swiper :options="swiperOption" ref='mySwiper'>
				<swiper-slide v-for="(item,index) in banners" :key="index">
					<img :src="item" class="swiperImg">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<router-view v-on:setNav="setNavigationNum" />
		<h-footer></h-footer>
	</div>
</template>

<script>
import banner_01 from "./public/img/banner_01.jpg";
import banner_02 from "./public/img/banner_02.jpg";
import header from "./components/header/header";
import footer from "./components/footer/footer";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "app",
  data: function() {
    return {
      swiperOption: {
        notNextTick: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        autoplay: 4000,
        width: window.innerWidth
      },
      banners: [banner_01, banner_02],
      imgHeight: 0,
      num: '1'
    };
  },
  components: {
    "h-header": header,
    "h-footer": footer,
    swiper,
    swiperSlide
  },
  methods: {
    setNavigationNum: function(val) {
	  this.num = val;
    }
  },
  mounted() {
    setTimeout(() => {
      this.imgHeight = this.$refs.mySwiper.swiper.height;
    }, 1000);
  }
};
</script>

<style lang="less" scoped >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.swiper-wrapper {
  margin: 0 auto;
  .swiperImg {
    width: 100%;
    vertical-align: top;
  }
}
</style>
