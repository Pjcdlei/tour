<template>
  <div class="comment">
    <div class="top">
      <div class="topComment"><span>99</span> %满意度 <span>177条点评</span></div>
      <div>点评/问答></div>
    </div>
    <div class="bottom">
      <div>环境不错</div>
      <div>服务周到</div>
      <div>酒店不错</div>
    </div>
  </div>
</template>
<style scoped>
.comment{
  background: white;
  padding: .2rem .2rem;
  margin-bottom: .14rem;
}
.top{
  display: flex;
  justify-content: space-between;
  /* color: rgb(23, 39, 39); */
}
.bottom{
  display: flex;
  margin-top: .2rem;
}
.topComment>span{
  font-size: .4rem;
}
.topComment>span+span{
  color:#666;
  font-size: .25rem;
  margin-left: .2rem;
}
.bottom>div{
  background: rgba(174, 217, 230,.4);
  color: rgb(64, 133, 133);
  padding: .07rem;
  margin-right: .1rem;
  border-radius: .14rem;
}
</style>