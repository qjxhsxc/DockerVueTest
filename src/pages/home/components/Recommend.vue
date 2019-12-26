<template>
  <div>
    <div class="title">热门推荐</div>
      <div class="item" v-for="item of recommendData" :key="recommendData.id">
        <div class="item-img">
          <img class="img-self" :src="item.imgUrl" />
        </div>
        <div class="font">
          <p class="font-title">{{item.title}}</p>
          <p class="font-description">{{item.description}}</p>
          <p class="font-price">{{item.price}}<span class="font-price-hanz">起</span></p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendData: Array
  },
  data() {
    return {
      recommendList: [
        {
          id: '1',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1912/15/151834b2b546d398a3.water.jpg_200x200_051ba581.jpg',
          titile: '广州长隆游乐园',
          description: '将壮观诠释到完美，将梦想展示给世界',
          price: '￥99'
        },
        {
          id: '2',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1912/73/73c29bc10d037242a3.water.jpg_200x200_fb5261e8.jpg',
          titile: '长隆飞鸟乐园',
          description: '将壮观诠释到完美，将梦想展示给世界',
          price: '￥87.5'
        },
        {
          id: '3',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/72/72d087ebb95580c2.img.jpg_200x200_4f9d01ca.jpg',
          titile: '南沙湿地公园',
          description: '将壮观诠释到完美，将梦想展示给世界',
          price: '￥175'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    height: 35px
    line-height: 35px
    margin-top: 1px
    background-color: #eee
  .item
    width: 100%
    height: 80px
    border-bottom: 1px solid #eee
    .item-img
      position: relative
      float: left
      width: 25%
      height: 78px
      line-height: 78px
      .img-self
        position: absolute
        top: 50%
        margin-top: -32px
        left: 50%
        margin-left: -32px
        width: 64px
        height: 64px
    .font
      padding: 8px
      height: 64px
      .font-title
        font-weight: bold
        ellipsis()
      .font-description
        margin-top: 2%
        font-size: 12px
        color: darkgray
        ellipsis()
      .font-price
        margin-top 2%
        color: darkorange
        .font-price-hanz
          font-size: 12px
          color: black
</style>
