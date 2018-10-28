<template>
	<div class="header">
	  <router-link to="/">
	  <span class="iconfont city-hd-back-icon">&#xe624;</span>
	  </router-link>
		城市选择
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'CityHeader',
	}
</script>

<!-- this.$store -->

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.header{
	position: relative;
	width: 100%
  line-height: $headerHt;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: .32rem;
  text-align: center;
  color: #fff;
  background-color: #00bcd4;
}

.header .city-hd-back-icon{
	position: absolute;
	top: 0;
	left: .2rem;
	color: #fff;
}
	
</style>