<template>
  <div class="search-wrapper">
    <input type="text" class="search-font" placeholder="请输入搜索内容" />
  </div>
</template>
<script>
  export default {
    name: 'Search'
  }
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search-wrapper
    display: flex
    width: 100%
    height: 43px
    line-height: 43px
    background: $bgcolor
    .search-font
      width: 98%
      height: 35px
      line-height: 35px
      text-align: center
      margin: 0 auto
      margin-top: 4px
      color: #ccc
      border: none
      outline: none
      background-color: white
      border-radius: 3px
</style>
