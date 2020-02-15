<template>
  <div class="week">
    <div class="weekDesc">
      <div class="descContent">
        ///////// <span>周末出游</span>/////////
        <p>致力推荐超完美套餐</p>
      </div>
    </div>
    <div class="weekSwiper">
      <swiper :options="swiperOption">
      <swiper-slide v-for="(item,i) of weekSwiperList" :key="i">
        <div class="weekSwiperItem">
          <div class="weekSwiperItemImg">
            <img :src="item.imgUrl">
          </div>
          <div class="weekSwiperItemDesc">{{item.desc}}
            <p>{{item.detail}}</p>
          </div>
        </div>
      </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    weekSwiperList:Array
  },
  data(){
    return{
      // weekSwiperList:[
      //   {imgUrl:require('../assets/image/nhw.jpg'),desc:'拈花湾',detail:'禅意假日 古韵风光'},
      //   {imgUrl:require('../assets/image/dsn.jpg'),desc:'迪士尼',detail:'点亮心中奇梦'},
      //   {imgUrl:require('../assets/image/wt.jpg'),desc:'外滩',detail:'不夜城的韵味'},
      // ],
      swiperOption:{
        freeMode:true,
        spaceBetween:20,
        slidesPerView:3,
        loop:true
    }
    }
  }
}
</script>
<style scoped>
  .week{
    overflow: hidden;
    height: 0;
    /* width:50%; */
    padding-bottom: 55%;
    background-color: white;
    margin-top: .2rem;
  }
  .weekDesc{
    overflow: hidden;
    height: 0;
    padding-bottom: 15.5%;
    /* background-color: orchid; */
    /* margin: 0 auto; */
    position: relative;
  }
  .descContent{
    color: #666;
    position: absolute;
    top:50%;left: 50%;
    transform: translate(-50%,-50%)
  }
  .descContent>span{
    display: inline-block;
    color: #000;
    font-weight: bold;
    margin: .15rem .3rem;
    /* background-color: pink; */
  }
  .descContent p{
    /* background-color: pink; */
    text-align: center
  }
  .weekSwiper{
    overflow: hidden;
    /* width: 100%; */
    height: 0;
    padding-bottom:84.5%;
    /* background-color: olivedrab */
  }
  .weekSwiperItem{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 120%;
    /* background-color: orange */
    margin-left: .2rem;
    border: .02rem solid #ccc
  }
  .weekSwiperItemImg{
    overflow: hidden;
    height: 0;
    padding-bottom:68%;
    background-color: pink;
  }
  .weekSwiperItemImg>img{
    max-width: 100%;
  }
  .weekSwiperItemDesc{
    text-align: center;
    padding-top: .3rem
  }
  .weekSwiperItemDesc>p{
    margin-top: .1rem;
  }
</style>