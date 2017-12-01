<template>
	<div class="contact">
		<Breadcrumb>
			<BreadcrumbItem>首页</BreadcrumbItem>
			<BreadcrumbItem>联系我们</BreadcrumbItem>
		</Breadcrumb>
		<div class="list clearfix">
			<div class="list-left">
				左
			</div>
			<div class="list-right">
				<b-map-component></b-map-component>
			</div>
		</div>
	</div>
</template>

<script>
import BMapComponent from '../components/bmap/BMapComponent.vue'
export default {
	name:'contact',
	beforeRouteEnter   (to, from, next) {
		next((vm)=>{
			vm.$emit('setNav',to.meta.index)
		})
	},
	components:{
		BMapComponent
	}
};
</script>

<style lang="less" scoped>
.contact {
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

