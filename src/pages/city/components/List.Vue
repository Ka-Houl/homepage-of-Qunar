<template>
	<div class="list" ref="listWrapper">
		<div>
			<div class="hot-cities">
			  <div class="hot-cts-title">热门城市</div>
        <ul class="clearfix">
          <li v-for="item in computedCities"  
              :key=item.id 
              :class="item.borderType"
              @click="handleCityClick(item.name)">
          	{{item.name}}
          </li>
        </ul>
			</div>
			<div class="alphabet-menu">
				<div class="alphabet-menu-title">字母排序</div>
					<ul class="clearfix">
						<li v-for="(item,index) in letters" :key="index" @click="handleLetterClick">{{item}}</li>
					</ul>
			</div>
			<div class="alphabet-list" 
			     v-for="(itemList, key) in cities" 
			     :key="key" 
			     :ref="key">
			  <!-- :ref注册引用信息 -->
        <div class="alphabet-list-title">{{key}}</div>
        <ul class="clearfix">
        	<li v-for="item in itemList" 
        	@click="handleCityClick(item.name)">{{item.name}}</li>
        </ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
  import BScroll from 'better-scroll'
	export default {
		name: 'CityList',
		props: {
      hotCities: Array,
      cities: Object
		},
		data: function () { 
       return {
       	letter: ''    //先在data里声明一个空的letter，然后通过watch监听letter的变化
       }
		},
		methods: {
			handleLetterClick: function (e) {
				this.letter = e.target.innerText;
			},
			handleCityClick: function (city) {
				// this.$store.state.city = e;
				// this.$store.dispatch('changeCityName', e)
				this.$store.commit('changeCityName',city)
				this.$router.push({
		      name: "Home"
				})
			}
		},
		watch: {    
			letter: function () { //监听letter值的改变，如果有改变，执行相应方法
				if(this.letter){
				var element = this.$refs[this.letter][0];   //element是相应的dom节点
				this.scroll.scrollToElement(element)
				}
			}
		},
		computed: {     //对边框的类名进行动态绑定 根据hotCities计算出result
			letters: function () {
        var letters = [];
        for (var i in this.cities){
        	letters.push(i);
        }
        return letters;
		  },
		  computedCities: function () {
				var result = [],
				    length = this.hotCities.length,
				    item;
				for (var i = 0; i < length; i++) {
					var resObj = {};
					item = this.hotCities[i];
					resObj.name = item.name;
					resObj.id = item.id;
					if (item.order === 1) {
            resObj.borderType  = '';
					} else if (item.order === 2 || item.order === 3){
            resObj.borderType = "border-left";
					} else if (item.order % 3 === 1) {
            resObj.borderType = "border-top";
					} else {
            resObj.borderType = "border-topleft";
					}
          result.push(resObj)
				}
				return result;
			},
		},
		mounted: function () {
      this.scroll = new BScroll(this.$refs.listWrapper, {
      	click: true
      })   //添加click: true，以防手机端的这个组件失效
			// console.log(typeof(this.$refs))
      //this.$refs.listWrapper直接获取DIV元素
		},
		// updated: function () {
		// 	console.log(this.$refs)
		// }
	}
</script>

<style lang="stylus" scoped>
div{
	box-sizing: border-box;
}

.list{
	position: absolute;
	top: 0.88rem;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
}

.clearfix::after{
	content: "";
	display: block;
	clear: both;
}

.hot-cities,
alphabet-menu{
	width: 100%;
	height: 4.08rem; 
	line-height:4.08rem;
}

.hot-cities .hot-cts-title{
	height: .72rem;
}

.hot-cities .hot-cts-title,
.alphabet-menu .alphabet-menu-title,
.alphabet-list-title{
	width: 100%;
	line-height: .72rem;
	padding:0 .2rem;
	background-color: lightblue;
	background-color: #F5F5F5;
}

.hot-cities ul li{
	float: left;
	width: 33.33%;
	height: .9rem;
	line-height: .9rem;
	text-align: center;
}

.alphabet-menu ul li{
	float: left;
	width: 16.67%;
	height: .9rem;
	line-height: .9rem;
	text-align: center;	
}

.alphabet-list ul li{
	float: left;
	width: 25%;
	height: .9rem;
	line-height: .9rem;
	text-align: center;
}
</style>