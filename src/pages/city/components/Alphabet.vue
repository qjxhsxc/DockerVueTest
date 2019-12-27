<template>
  <div class="alphabet">
    <ul class="alphabet-list">
      <li v-for="(item, key) of cityPlace">{{key}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cityPlace: Object
  }
}
</script>
<style lang="stylus" scoped>
  .alphabet
    display: flex
    align-items: center
    position: absolute
    width: 15px
    top: 87px
    right: 0
    bottom: 0
    .alphabet-list
      position: relative
      text-align: center
</style>
