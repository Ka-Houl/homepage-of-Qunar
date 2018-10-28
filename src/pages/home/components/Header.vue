<template>
  <div class="header">
     <div class="header-left">
       <span class="iconfont">&#xe624;</span>
     </div>
     <div class="header-middle">
        <span class="iconfont search-icon">&#xe632;</span>
        <div class="kw">输入城市/景点/游玩主题</div>
     	<input type="text" class="header-input">
     </div>
     <router-link to="city">
	     <div class="header-right">
	       <!-- {{this.$store.state.city}} -->
	       {{this.city}}
	       <span class="iconfont arrow-icon">&#xe6aa;</span>
	     </div>
     </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: 'HomeHeader',
  computed: {   // 使得this.$store.state.city可以简写成this.city
  	...mapState({  
  		city: 'city'  
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~styles/variables.styl';

  div{
  	display: flex;
  }

  .header{
    width: 100%;
    height: $headerHt;
    color: #fff;
  	background-color: $bgColor;
  }

  .header .header-left{
    width: .8rem;
    height: 100%;
  	line-height: $headerHt;
  	justify-content: center;
  }

  .header .header-middle{
  	position: relative;
    flex: 1;
    margin: 0.14rem 0
  }

  .header .header-middle .kw{
  	position: absolute;
  	top: 0.16rem;
  	left: 0.65rem;
  	color: #e4e7ea;
  }

  .header .header-middle .header-input{
  	width: 100%;
  	height: 100%;
  	border-radius: 0.06rem;
  }

  .header .header-middle .search-icon{
  	position: absolute;
  	top: .13rem;
  	left: .2rem;
  	color: #e4e7ea;
  }

  .header .header-right{
    min-width: 1.12rem;
    padding:  0 .1rem;
    height: 100%;
  	line-height: 0.88rem;
  	justify-content: center;
  	color: #fff;
  } 

  .header .header-right .arrow-icon{
  	font-size: .36rem;
  }
</style>
