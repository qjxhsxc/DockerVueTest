<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div class="item" v-for="item of weekData" :key="weekData.id">
      <div class="item-img">
        <img class="img-self" :src="item.imgUrl" />
      </div>
      <div class="font">
        <p class="font-description">{{item.description}}</p>
        <p class="font-price">{{item.price}}<span class="font-price-hanz">起</span></p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HomeWeek',
    props: {
      weekData: Array
    },
    data() {
      return {
        recommendList: [
          {
            id: '1',
            imgUrl: 'https://pic4.40017.cn/zzy/rimage/2016/10/09/19/zqqkxc_420x228_00.jpg',
            titile: '广州长隆游乐园',
            description: '无锡君来波罗蜜多酒店，游拈花湾，自选灵山大佛景区【灵山胜境】【踏青赏花】',
            price: '￥99'
          },
          {
            id: '2',
            imgUrl: 'https://pic4.40017.cn/zzy/rimage/2016/10/09/19/zqqkxc_420x228_00.jpg',
            titile: '广州游乐园',
            description: '【景区内】游拈花湾，自选灵山大佛景区【灵山胜境】【踏青赏花】',
            price: '￥99'
          },
          {
            id: '3',
            imgUrl: 'https://pic4.40017.cn/zzy/rimage/2016/10/09/19/zqqkxc_420x228_00.jpg',
            titile: '广州长隆',
            description: '【景区内】无锡君来波罗蜜多酒店，自选灵山大佛景区【灵山胜境】【踏青赏花】',
            price: '￥99'
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
    background-color: #eee
  .item
    width: 100%
    height: auto
    .item-img
      position: relative
      width: 100%
      height: 70px
      .img-self
        width: 100%
        height: 64px
    .font
      height: 64px
      .font-description
        margin-top: 5px
        color: black
        ellipsis()
      .font-price
        margin-top 2%
        color: darkorange
        .font-price-hanz
          font-size: 12px
          color: black
</style>
