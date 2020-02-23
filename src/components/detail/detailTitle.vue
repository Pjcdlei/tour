<template>
  <div class="title">
    <div class="wraper">
      <div class="desc"> 无锡拈花湾客栈1晚，游拈花湾，自选酒店自助晚餐、伴食餐等<span>【灵山胜境】【亲子精选】【踏青赏花】</span></div>
      <div class="priceWrap">
        <div class="price"> <span>￥</span>
          599<span>起/份</span></div>
        <div class="limit">限时抢购</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.wraper{
  background: white;
  padding: .2rem;
}
.desc{
  font-weight: bold;
  letter-spacing: .01rem;
  /* text-indent: .rem */
  line-height: .33rem;
}
.priceWrap{
  display: flex;
  justify-content: space-between;
  margin-top: .2rem;
  color: rgb(241, 116, 26);
  font-weight: bold
}
.price{
  font-size: .4rem
}
.price>span+span{
  color: #666;
  font-size: .2rem;
  margin-left: .1rem;
}
span:first-of-type{
  font-size: .2rem;
  
}
</style>