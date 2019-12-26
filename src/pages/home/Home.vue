<template>
  <div id="home">
    <home-header :cityData="city"></home-header>
    <home-swiper :swiperData="swipperData"></home-swiper>
    <home-icons :iconsData="iconData"></home-icons>
    <home-recommend :recommendData="recommendData"></home-recommend>
    <home-week :weekData="weekData"></home-week>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeek from './components/Week'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeek
  },
  data() {
    return {
      city: "",
      swipperData: [],
      iconData: [],
      recommendData: [],
      weekData: []
    }
  },
  methods: {
    getData() {
      axios.get('api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      const result = res.data
      if (res.ret && res.data) {
        this.city = result.city;
        this.swipperData = result.swiperList;
        this.iconData = result.iconList;
        this.recommendData = result.recommendList;
        this.weekData = result.weekendList;
      }
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style>
</style>
