<template>
	<div id="allmap" v-bind:style="mapStyle"></div>
</template>

<script>
export default {
  data: function() {
    return {
      mapStyle: {
        width: "100%",
        height: this.mapHeight + "px"
      }
    };
  },
  props: {
    // 地图在该视图上的高度
    mapHeight: {
      type: Number,
      default: 500
    },
    // 经度
    longitude: {
      type: Number,
      default: 118.381555
    },
    // 纬度
    latitude: {
      type: Number,
      default: 31.353954
    },
    description: {
      type: String,
      default: "惠国征信"
    }
  },
  mounted: function() {
    let map = new BMap.Map("allmap");
    let point = new BMap.Point(this.longitude, this.latitude);
    let marker = new BMap.Marker(point);
    map.addOverlay(marker);
    map.centerAndZoom(point, 15);
    // 信息窗的配置信息
    let opts = {
      width: 50,
	  height: 20,
    //   title: "地址："
    };
    let infoWindow = new BMap.InfoWindow(this.description, opts); // 创建信息窗口对象
    marker.addEventListener("click", function() {
      map.openInfoWindow(infoWindow, point);
    });
    map.enableScrollWheelZoom(true);
    map.openInfoWindow(infoWindow, point); //开启信息窗口
  }
};
</script>

<style lang="less" scoped>

</style>

