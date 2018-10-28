<template>
  <div class="icons-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for='(page,index) of pages' :key='index'>
		  	<div class="icon-box" v-for='item of page' :key='item.id'>
		  		<div class="icon-img-box">
		  			<img class="icon-img" :src="item.imgUrl"/>
		  		</div>
		  		<p class="icon-description">{{item.description}}</p>
		  	</div>
	  	</swiper-slide>
	  	<div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
  </div>
</template>

<script type="text/javascript">
export default {
	name: 'HomeIcons',
	props: {
		iconsList: Array,
	},
	data: function () {
  	return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        keyboard : true,
      }
  	}
  },
  computed: {
    pages: function () {
      var pages = [];
      this.iconsList.forEach(function (item,index) {
      	var page = Math.floor(index / 8)   //向下取整，设置成两页

      	if(!pages[page]) {
      		pages[page] = [];
      	}
      	pages[page].push(item)  //把每个iconpush进去页中
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';
.icons-wrapper >>> .swiper-container{
	overflow: hidden;
  width: 100%;   
  height: 0;
  padding-bottom: 50%;
}

.icons-wrapper{
  margin: .2rem 0;
}

.icons-wrapper >>> .swiper-pagination-bullet-active{
  background-color: orange  !important
}
.icons-wrapper .icon-box{
	position: relative;
	float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icons-wrapper .icon-box .icon-img-box{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
}

.icons-wrapper .icon-box .icon-img{
	display: block;
	margin: 0 auto;
	height: 100%;
}

.icons-wrapper .icon-box .icon-description{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  color: $darkTxtColor;
  ellipsis();  /*导入mixins.styl里边的样式*/
}
</style>

