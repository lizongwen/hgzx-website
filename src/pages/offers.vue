<template>
	<div class="offers">
		招贤纳士
	</div>
</template>

<script>
export default {
	beforeRouteEnter   (to, from, next) {
		next((vm)=>{
			vm.$emit('setNav',to.meta.index)
		})
	},
};
</script>
<style lang="less" scoped>
.offers {
  width: 1000px;
  margin: 0 auto;
}
</style>

