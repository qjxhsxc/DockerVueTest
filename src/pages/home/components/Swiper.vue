<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="imgSwiper" :src="item.imgurl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'HomeSwiper',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction:false,
      },
      swiperList:[
        {
          id: '1',
          imgurl: 'https://imgs.qunarzz.com/vc/2c/1b/b2/edc5ed446de08e1285a957d3b5.jpg_92.jpg'
        },
        {
          id: '2',
          imgurl: 'https://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg'
        },
        {
          id: '3',
          imgurl: 'https://imgs.qunarzz.com/vc/48/4d/58/490ca00c8127e8fe8276ab1a20.jpg_92.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: white!important
  .wrapper            //图片百分比撑开
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 30%
    .imgSwiper
      width:100%
</style>
