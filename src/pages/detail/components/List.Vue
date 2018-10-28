<template>
	<div>
		<div v-for="(item, index) in categoryList"
		     :key="index"
		     class="list-item">
		  <div class="list-item-title border-bottom">
		  <span class="item-title-icon"></span>
		    {{item.title}}
		  </div>
		  <div v-if="item.children" class="item-children">
		  	<detail-list v-bind:category-list="item.children"></detail-list>
		  </div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'DetailList',
	props: {
		categoryList: Array
	}
}
</script>

<style lang="stylus" scoped>
.list-item-title{
	width: 100%;
	height: .8rem;
	line-height: .8rem;
	padding: 0 .2rem;
	font-size: .32rem;
	text-indent: .4rem;
}

.item-title-icon{
    display: inline-block;
    position: absolute;
    width: .36rem;
    height: .36rem;
    top: .26rem;
    left: .2rem;
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
}

.item-children{
	padding: 0 .3rem;
}

.item-children .list-item-title{
  font-size: .24rem
}
</style>