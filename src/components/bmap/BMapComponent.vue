<template>
	<div id="allmap" v-bind:style="mapStyle"></div>
</template>

<script>
import position from './position';
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
      default: 31.354554
    },
    description: {
      type: String,
      default: "惠国征信"
    }
  },
  mounted: function() {
    let map = new BMap.Map("allmap");
    let point = new BMap.Point(this.longitude, this.latitude);
    let myIcon = new BMap.Icon(position,new BMap.Size(40, 60));
    let marker = new BMap.Marker(point, { icon: myIcon });
    map.addOverlay(marker);
    map.centerAndZoom(point, 17);
  }
};
</script>

<style lang="less">
.anchorBL {
  display: none;
}
</style>

