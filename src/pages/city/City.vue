<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cityList="cityData" :cityPlace="cityPlace"></city-list>
    <city-alphabet :cityPlace="cityPlace"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cityData: {},
      cityPlace: {}
    }
  },
  methods: {
    getCityData() {
      axios.get('/api/city.json')
        .then(res => {
          this.cityData = res.data.data;
          this.cityPlace = res.data.data.cities;
        })
    }
  },
  mounted() {
    this.getCityData();
  }
}
</script>
<style lang="stylus" scopes></style>
