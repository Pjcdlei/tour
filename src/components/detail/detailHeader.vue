<template>
  <div class="header">
    <div @click="backClick" class="left"><span class="iconfont">&#xe68b;</span></div>
    <div class="middle">景点+酒店</div>
    <div class="right">
      <span class="iconfont">&#xe708;</span>
      </div>
    
  </div>
</template>
<script>

export default {
  methods:{
    backClick(){
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
  .header{
    line-height: .88rem;
    background-color: #ffffff;
    display: flex
  }
  .left{
    float: left;
    margin-left: .2rem;
    color:turquoise
  }
  .middle{
    flex: 1;
    text-align: center;
    font-weight: bold
  }
  .right{
    float: right;
    padding-right: .5rem;
    color:turquoise;
  }
  .iconfont{
    font-size: .5rem;
  }
</style>