<template>
	<div>
	  <detail-banner :sight-name="sightName"
	                 :banner-image="bannerImage"
	                 :gallery-images="galleryImages"
	  >
	  </detail-banner>
	  <detail-header></detail-header>
	  <div class="content-box">
	  	<detail-list v-bind:category-list="categoryList"></detail-list>
	  </div>
	</div>
</template>

<script type="text/javascript">

import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'   //获取数据

export default {
	name: 'CityDetail',
  components: {
  	'detail-banner': DetailBanner,
  	'detail-header': DetailHeader,
  	'detail-list': DetailList
  },
  data: function () {
  	return {
  		sightName: '',
  		bannerImage: '',
  		galleryImages: [],
  		categoryList: [],
  		list: [{
  			title: '门票',
        children: [{
	         	title: '峨眉山成人票',
	         	children: [{
	         		title: '包含电子导游链接及授权码'
	         	}]
	        },{
	         	title: '峨眉山优惠人群票',
	         	children: [{
	         		title: '上车地址：峨眉山大酒店停车场'
	         	}]
	        }]
	      },{
        	title: '金顶索道'
        },{
        	title: '万年寺索道'
        },{
        	title: '观光车'
        },{
        	title: '景区直通车'
        }]
  	} 
  },
  methods: {
  	getDetailInfo: function () {
      axios.get('/api/detail.json?id=' + this.$route.params.id)
      .then(this.getDetailInfoSuccess)
      // console.log(this.$route.params)  //动态获取路由id配置项
  	},
  	getDetailInfoSuccess: function (res) {
  		if(res.data.ret && res.data.data)
  		var data = res.data.data;
  		this.sightName = data.sightName;  //将json里的sightName赋值给组件里的sightName
  		this.bannerImage = data.bannerImage;
  		this.galleryImages = data.galleryImages;
  		this.categoryList = data.categoryList;
  	}
  },
  mounted: function () {
  	this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content-box{
  	height:45rem;
  }
</style>