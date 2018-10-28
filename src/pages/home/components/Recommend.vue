<template>
  <div>
    <div  class="recommend-title">
      <span class="iconfont icon-heart">&#xe607;</span>
      猜你喜欢
    </div>
    <ul>
      <router-link tag="li" 
                   :to="'/detail/' + item.id"
                   class="list-item" 
                   v-for='(item) of recommendList' 
                   :key='item.id'>
          <div class="item-img">
            <img :src="item.imgUrl">
          </div>
          <div class="item-img-tag">{{item.tag}}</div>
          <div class="item-info">
            <div class="inner-box">
              <div class="info-title">{{item.title}}</div>
              <div class="info-comment">
                <span class="iconfont icon-star">&#xe730;</span>
                <span class="iconfont icon-star">&#xe730;</span>
                <span class="iconfont icon-star">&#xe730;</span>
                <span class="iconfont icon-star">&#xe730;</span>
                <span class="iconfont">&#xe730;</span>
                <span class="comment-num">{{item.commentNum}}条评论</span>
              </div>
              <div class="info-price">
                <span class="price">￥<em>{{item.price}}</em></span>起
                <span class="district">{{item.district}}</span>
              </div>
            </div>
          </div>
        </li>        
      </router-link>
    </ul>    
  </div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  props:{
    recommendList: Array,
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';
div{
  box-sizing: border-box;
}
.recommend-title{
  width: 100%;
  line-height: 0.8rem;
  font-size: 0.32rem;
  background-color: #eee;
}

.recommend-title .icon-heart{
  color: red;
  margin-right: .08rem;
  margin-left: .13rem;
}

.list-item{
  position: relative;
  width: 100%;
  height: 2.4rem;  
}

.list-item .item-img{
  position: relative;
  float: left;
  width: 2.4rem;
  height: 2.4rem;  
  padding: 0.2rem;
}

.list-item .item-img-tag{
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 1.02rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: .2rem;
  text-indent: 0.04rem;
  background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);
  background-size: 100%;
}

.item-img img{
  width: 100%;
  height: 100% 
}

.list-item .item-info{
  margin-left: 2.4rem;
  height: 2.4rem;
  padding: .4rem .1rem;
}

.item-info .inner-box{
  width: 100%;
  height: 100%;
}

.item-info .inner-box .info-title{
  height: .44rem;
  color: #212121;
  font-size: .32rem;
  line-height: .44rem;
  ellipsis();
}

.item-info .inner-box .info-comment{
  margin-top: .14rem;
  height: .34rem;
}

.item-info .inner-box .info-comment .icon-star{
  color: #ffb436;
  line-height: .4rem;
  font-size: .3rem;
}

.item-info .inner-box .info-comment .comment-num{
  color: $lightTxtColor;
}

.item-info .inner-box .info-price{
  position: relative;
  margin-top: .22rem;
  color: $lightTxtColor;
  font-size: .3rem;
  line-height: .6rem;
}

.item-info .inner-box .info-price span{
  color: orange;
}

.item-info .inner-box .info-price .price em{
  font-size: .4rem;
}

.item-info .inner-box .info-price .district{
  position: absolute;
  width: 1.2rem;
  bottom: 0;
  right: .4rem;
  color: $lightTxtColor;
  ellipsis();
}
</style>