<template>
  <div class="sw-wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for='item of swiperList' :key='item.id' v-if="swiperList.length">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--  <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data: function () {
  	return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,   // 这里设置true也不能循环播放？？
        keyboard : true,
      },
  	}
  }
}
</script>

<style lang="stylus" scoped>
  .sw-wrapper >>> .swiper-pagination-bullet-active{
    background-color: #fff  !important
  }
  
  .sw-wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.67%;
    background-color: #eee;
  }

  .swiper-img{
    width: 100%;
    height: 100%;
  }
</style>