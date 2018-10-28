<template>
  <div>
    <city-header></city-header>
    <city-list :hot-cities="hotCities" :cities="cities"></city-list> 	
  </div>

</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import axios from 'axios'   //获取数据
export default{
  name: 'City',
	components: {
		'city-header': CityHeader,
		'city-list': CityList,
	},
  data: function () {
     return{
     	cities: {},
     	hotCities: [],
     }
  },
  methods: {
  	getHomeInfo: function () {
      axios.get('/api/city.json').then(this.getCityInfoSuccess)
  	},
  	getCityInfoSuccess: function (res) {
  		// console.log(res);
  		var data = res.data.data;
  		if(res.data.ret && res.data.data) {
          this.cities = data.cities;
          this.hotCities = data.hotCities;
  		}
  	}
  },
  mounted: function () {
  	this.getHomeInfo();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
