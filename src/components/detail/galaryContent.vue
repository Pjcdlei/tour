<template>
  <div class="galaryContent">
    <div class="wrapper">
      <div class="imgWrapper" v-for="(item,i) of imgList[index][index]" :key="i">
        <img :src="item.imgUrl" @click="handlePictureClick">
      </div>
    </div>
    <div class="galary" v-show="show">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(item,i) of imgList[index][index]" :key="i" >
          <div class="galaryWrap">
          <div class="galaryDesc">{{i+1}}/{{imgList[index][index].length}}</div>
          <div class="galaryImg">
          <img :src="item.imgUrl">
          </div>
          
          <div class="cancelBtn" @click="handleBackClick">X</div>
          </div>
          
        </swiper-slide>
    </swiper>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  
  methods:{
    handlePictureClick(){
      // this.length=this.imgList[this.index][this.index].length
      this.show=true;

    },
    handleBackClick(){
      this.show=false
    },
    // a(){
    //   let length=(this.imgList[this.index][this.index]).length
    //   this.length=length
    // }
  },
  computed:mapState(['index']),//
  data(){
    return{
      // length:0,
      show:false,
      swiperOption:{
        loop:false
      },
      imgList:[
        {
          0:[
            {imgUrl:require('../../../public/image/kh.jpg')},
            {imgUrl:require('../../../public/image/nhw.jpg')},
            {imgUrl:require('../../../public/image/bd.jpg')},
            {imgUrl:require('../../../public/image/kh.jpg')},
            {imgUrl:require('../../../public/image/kh.jpg')},
            {imgUrl:require('../../../public/image/kh.jpg')},
            {imgUrl:require('../../../public/image/kh.jpg')},
          ]
          
        },
        {
          1:[
            {imgUrl:require('../../../public/image/kh.jpg')},
            {imgUrl:require('../../../public/image/kh.jpg')},
            {imgUrl:require('../../../public/image/kh.jpg')},
            {imgUrl:require('../../../public/image/kh.jpg')},
          ]
          
        }
      ]
    }
  },
  // mounted(){
  //   this.a()
  // },
}
</script>
<style scoped>
  .wrapper{
    /* background-color: rgb(238, 132, 132); */
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-flow: wrap;
  }
  .imgWrapper{
    /* display: flex;
    justify-content: space-between; */
    height: 0;
    overflow: hidden;
    padding-bottom: 26%;
    width: 46%;
    background-color: #aaa;
    margin:.12rem;
    border-radius: .13rem;
    /* float: right; */
  }
  .imgWrapper>img{
    max-width: 100%;
  }
  .galary{
    /* display: block; */
    position: absolute;
    top:-.82rem;
    left:0;
    right: 0;
    bottom: 0; 
    background-color: #000;
    
    /* height: 3rem; */
  }
  .galaryWrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* background-color: pink; */
    /* height: 9rem; */
    /* height: 0;
    overflow: hidden;
    padding-bottom: 217% */
    /* margin-top: 30%;
    margin-bottom: 0 */
  }
  .galaryImg{
    margin-top: 20%;
    height: 0;
    overflow: hidden;
    padding-bottom: 56%;
    /* padding-bottom: 66% */
  }
  .galaryImg>img{
    width: 100%
  }
  .galaryDesc{
    margin-top: 1rem;
  }
  /* .swiperPagination{
    color:#fff;
    bottom: 7.5rem
  } */
  .cancelBtn{
    position: relative;
    font-size: .5rem;
    /* bottom: 30%;  */
    /* background-color: greenyellow; */
    margin-top: 40%
    /* display: flex */
  }
</style>