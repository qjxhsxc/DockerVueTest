<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="tag-item">
          北京
        </div>
      </div>

      <div class="area">
        <div class="title">热门城市</div>
        <ul>
          <li class="tag-item" v-for="(items, index) of cityList.hotCities" :key="index">{{items.name}}</li>
        </ul>
      </div>

      <div class="area" v-for="(item, key) of cityPlace" :key="key">
        <div class="title">{{key}}</div>
        <ul>
          <li class="hot-city" v-for="(itemPlace) of item" :key="itemPlace.id">{{itemPlace.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    cityList: Object,
    cityPlace: Object
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles"
@import "~styles/mixins.styl"
.city-list
  position: absolute
  top: 87px
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .area
    clear: both
    /*padding: 0 15px 0 0*/
    .title
      background-color: #eee
      border-bottom: 1px solid #ccc
      line-height: 24px
      height: 24px
    .tag-item
      ellipsis()
      width: 30%
      height: 20px
      margin: 1%
      text-align: center
      float: left
      border: 1px solid #eee
      border-radius: 3px
    .hot-city
      height: 28px
      line-height: 28px
      border-bottom: 1px solid #eee
</style>
