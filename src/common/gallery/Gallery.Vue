<template>
	<div class="gallery-container" @click="handleGalleryClick">
	<div class="img-wrapper">
    <swiper  :options="swiperOption">
    <!-- slides -->
	    <swiper-slide v-for="(item, index) of imgsList" :key="index">
	      <img class="gallery-img" :src="item" />
	    </swiper-slide>
	    <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
	    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div> -->
	    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>  
	</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'CommonGallery',
	props: {
		imgsList: {
			type: Array,
			default: function () {
				return [];
			}
		}
	},
  data: function () {
  	return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        loop: true,
        keyboard : true,
        observer: true,
        observeParents: true,
      },
  	}
  },
  methods: {
  	handleGalleryClick: function () {
      this.$emit('closeGallery')
  	}
  }
}
</script>

<style lang="stylus" scoped>
div{
	display: flex;
}

.gallery-container >>> .swiper-container{
	position:absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	overflow: visible
}

.gallery-container{
	flex-direction: column;
	justify-content: center;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #000;
	z-index: 3
}

.gallery-container .img-wrapper{
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 80%;
}

.gallery-container .gallery-img{
	width: 100%;
}

.gallery-container .img-wrapper .swiper-pagination{
	bottom: -1rem;
	justify-content: center;
	color: white;

}
</style>