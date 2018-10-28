<template>
	<div>
	  <router-link to="/" tag="div" 
	               class="header-back"
	               v-show="showHeaderBack">
			<span class="iconfont icon-back">&#xe624;</span>
		</router-link>
		<div class="header" 
		     v-show="!showHeaderBack"
		     :style="opacityStyle">
	    <router-link to="/"  class="header-left">
		  	<span class="iconfont icon-back">&#xe624;</span>
		  </router-link>
		  成都欢乐谷
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'DetailHeader',
	data: function () {
		return {
			showHeaderBack: true,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	mounted: function () {
		window.addEventListener('scroll',this.handleScroll)
	},
	beforeDestroy: function () {
		window.removeEventListener('scroll',this.handleScroll)
	},   //离开当前页面的时候，解除事件监听
	methods: {
		handleScroll: function () {
			// console.log(1)
			var top = document.documentElement.scrollTop;
			if(top > 50) {
        this.showHeaderBack = false;
			}else{
				this.showHeaderBack = true;
			}
			var opacity = top / 130
			opacity = opacity  > 1 ? 1 : opacity
			this.opacityStyle = {
				opacity: opacity
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
  .header-back{
  	position: absolute;
  	top: .2rem;
  	left: .2rem;
  	right: .2rem;
  	bottom: .2rem;
  	width: .8rem;
  	height: .8rem;
  	line-height: .8rem;
  	text-align: center;
  	border-radius: .4rem;
  	background-color: rgba(0, 0, 0, 0.6);
  	z-index: 1
  }

  .header-back .icon-back{
  	color: #fff
  }

  .header{
  	position: fixed;
  	top: 0;
  	left: 0;
  	right: 0;
  	height: $headerHt;
  	line-height: $headerHt;
  	background-color: $bgColor;
  	text-align: center;
  	color: #fff;
  	z-index: 2
  }

  .header .header-left{
  	position: absolute;
  	top: 0;
  	left: 0;
  	display: inline-block;
  	width: .8rem;
  	height: 100%;
  	line-height: .88rem;
  	text-align: center;
  	color: #000;
  }
</style>