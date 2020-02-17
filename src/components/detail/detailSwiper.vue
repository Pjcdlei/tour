<template>
  <div class="swiper">
    <router-link to="galary" append>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,i) of SwiperList" :key="i">
        <div class="imgWrapper">
          <img :src="item.imgUrl" class="swiperImg">
        </div>
        <div class="descWrapper">
          <span class="left">{{item.date}}</span>
          <span class="middle">{{item.page}}张</span>
          <span class="right">编号：{{item.number}}</span>
        </div>
      </swiper-slide>
    </swiper>
    </router-link>
  </div>
</template>
<script>

export default {
  data(){
    return{
      swiperOption:{
        loop:true
      },
      SwiperList:[
        {date:'两天一晚',imgUrl:require('../../../public/image/nhw.jpg'),page:'12331',number:'8997324'},
        {date:'两天一晚',imgUrl:require('../../../public/image/kh.jpg'),page:'12331',number:'8997324'}
      ]
    }
  }
}
</script>
<style scoped>
.imgWrapper{
  overflow: hidden;
  height: 0;
  padding-bottom: 43%;
}
.imgWrapper>img{
  width: 100%;
}
.descWrapper{
  position: absolute;
  color: white;
  left: 0;
  bottom:0;
  display: flex;
  /* background: pink; */
  width: 100%;
  line-height: .4rem;
  background-color: rgba(0, 0, 0, .6)
  /* opacity: .4; */
}
.left{
  margin-left: .1rem;
}
.middle{
  flex: 1;
  /* background-color: aqua; */
  display: flex;
  justify-content:flex-end;
  margin-right: .1rem;
}
.right{
  margin-right: .1rem;
}

</style>