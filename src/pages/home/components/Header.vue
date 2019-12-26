<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-center">
      <span class="iconfont search">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <span>城市</span>
      <div class="triangle"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header'
  }
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    background-color: $bgcolor
    color: #fff
    height: 43px
    line-height: 43px
    display: flex
    .header-left
      width: 32px
      float: left
      text-align: center
    .header-center
      background-color: #fff
      flex: 1
      color: #ccc
      height: 32px
      line-height: 32px
      margin-top: 6px
      margin-right: 1px
      border-radius: 3px
      .search
        margin-left: 2px
    .header-right
      margin: 0 5px
      .triangle
        height: 0px
        width: 0px
        border: 8px solid
        border-color: white $bgcolor $bgcolor
        float: right
        margin-top: 18px
        margin-left: 4px
        margin-right: 4px
</style>
