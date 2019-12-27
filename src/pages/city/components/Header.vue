<template>
  <div class="header-wrapper">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont">&#xe624;</span>
      </div>
    </router-link>
    <span class="center">城市选择</span>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus">
  @import "~styles/varibles.styl"
  .header-wrapper
    width: 100%
    height: 43px
    line-height: 43px
    color: #fff
    background-color: $bgcolor
    text-align: center
    border-bottom: 1px solid #ccc
    .header-left
      width: 32px
      float: left
      text-align: center
    .center
      margin-left: -32px
</style>
