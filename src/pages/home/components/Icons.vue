<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(items, index) of pages" :key="index">
        <div v-for="item of items" :key="item.id" class="icon-item">
          <div class="icon-img">
            <img class="img-self" :src="item.iconImg" />
          </div>
          <p class="icon-font">{{item.description}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Icons',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    iconsData: Array
  },
  data() {
    return {
      swiperOption: {
        loop: false
      }
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconsData.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles"
  .wrapper >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon-item
    position: relative
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 22px
      padding: 4px
      .img-self
        height: 100%
        display: block
        margin: 0 auto
    .icon-font
      text-align: center
      color: $fontcolor
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: 22px
      line-height: 22px
</style>
