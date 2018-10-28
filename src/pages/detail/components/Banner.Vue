<template>
  <div>
		<div class="banner" @click="handleBannerClick">
			<img  class="banner-img" :src="this.bannerImage">
			<div class="banner-info">
				<div class="banner-number">
				  <span class="iconfont">&#xe653;</span>
				  {{galleryImages.length}}
				</div>
				<div class="banner-title">{{this.sightName}}</div>
			</div>
		</div>
		<common-fade>
			<common-gallery @closeGallery="this.handleGalleryClose"
			                :imgsList="galleryImages"
			                v-show="isGalleryShow">
			                <!--@closeGallery是调用子组件传递过来的方法 -->
			</common-gallery>			
		</common-fade>
	</div>
</template>

<script type="text/javascript">
import CommonGallery from 'common/gallery/Gallery'
import CommonFade from 'common/fade/Fade'
export default {
	name: 'DetailBanner',
	components: {
		'common-gallery': CommonGallery,
		'common-fade': CommonFade
	},
	props: {
		sightName: String,
		bannerImage: String,
    galleryImages: Array
	},
  data: function () {
    return{
    	isGalleryShow: false,
      imgsList: ['http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_350x240_f8a69516.jpg','http://img1.qunarzz.com/sight/p0/1605/47/47e676ee434a591490.img.jpg_350x240_e0bc76a4.jpg','http://img1.qunarzz.com/sight/p0/1605/d4/d4e2dce9d328d5b290.img.jpg_350x240_07d6e292.jpg']
    }
  },
  methods: {
  	handleBannerClick: function () {
  		this.isGalleryShow = true;
  	},
  	handleGalleryClose: function () {
  		this.isGalleryShow = false;
  	}
  }
}
</script>

<style lang="stylus" scoped>
.banner{
	position: relative;
	overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  background-color: #eee;
}

.banner-img{
  width: 100%;
}

.banner .banner-info{
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: .6rem;
  right: 0;
  padding: 0 .2rem .2rem
  color: #fff;
  background: linear-gradient(to bottom,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
}

.banner .banner-info .banner-number{
	width: 1.2rem;
	height: .4rem;
	line-height: .4rem;
	text-align: center;
	background: rgba(0, 0, 0, 0.5);
	border-radius: .2rem;
	font-size: .28rem;
}

.banner .banner-info .banner-title{
	width: 100%;
	height: .6rem;
	line-height: .6rem;
	font-size: .36rem;
}

</style>