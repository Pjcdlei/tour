<template>
  <div class="guess">
    <div class="guessDesc" :class="guessDescChange">
      <div>猜你喜欢</div>
    </div>
    <!-- <router-link to="'/detail/'+'item.id'"></router-link> -->
    <router-link tag="div"  class="guessContent" v-for="(item,i) of guessContentList" :key="i" :to="'/detail/'+i">
      <div class="guessContentImg">
        <img :src="item.src">
        <div><span>{{item.comment}}</span></div>
      </div>
      <div class="guessContentDesc">
      {{item.desc}}
      </div>
      <div class="guessContentPrice">
        <div class="guessContentPriceLeft">
          酒店距景点{{item.dist}}Km
        </div>
        <div class="guessContentPriceRight">
          <span>￥</span>{{item.price}}<span>起</span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props:{
    guessContentList:Array
  },
  data(){
    return{
      // guessContentList:[
      //   {src:require('../assets/image/bd.jpg'),comment:'11809点评 99%满意度',desc:'【冰岛 • 极光摄影】火山地貌-极光苍穹-冰雪瀑布-万年冰川-蓝湖温泉-草帽山-黑沙滩-飞机残骸-冰河湖，小众机位点缀，北欧冬季冰岛12日追光之旅',dist:'3',price:'37900'},
      //   {src:require('../assets/image/nj.jpg'),comment:'11089点评 99%满意度',desc:'【天境怒江】怒江收客霸主！探访人神共居丙中洛，寻找与世隔绝纹面女，怒江&独龙江大峡谷8日边疆行',dist:'111',price:'3880'},
      //   {src:require('../assets/image/kh.jpg'),comment:'1189点评 98%满意度',desc:'【开化春色】3-4月，探秘钱江源头，醉美开化，天上人间台回山，壮美梯田花海',dist:'5.55',price:'880'},
      //   {src:require('../assets/image/nj.jpg'),comment:'11089点评 99%满意度',desc:'【天境怒江】怒江收客霸主！探访人神共居丙中洛，寻找与世隔绝纹面女，怒江&独龙江大峡谷8日边疆行',dist:'111',price:'3880'},
      //   {src:require('../assets/image/lj.jpg'),comment:'2345点评 99%满意度',desc:'【徒步雨崩】游侠客高海拔徒步TOP1 丽江-梅里雪山日照金山-雨崩村-冰湖神瀑-金沙江大拐弯-虎跳峡，5/7日轻装徒步之旅',dist:'3.55',price:'1580'}
      // ],
      guessDescChange:''
    }
  },
  methods:{
    scrollChange(){
      let height=document.documentElement.scrollTop;
      // console.log(height)
      if(height>562){
        this.guessDescChange='guessDescChange'
      }else{
        this.guessDescChange=''
      }
    }
  },
  mounted() {
    window.addEventListener('scroll',this.scrollChange)
  },
}
</script>
<style scoped>
.guessDesc{
  overflow: hidden;
  height: 0;
  padding-bottom: 10%;
  margin-bottom: .1rem;
  margin-Top: .16rem;
  background-color: white;
  position: relative;

}
.guessDesc>div{
  position: absolute;
  top: 50%;left: 50%;
  transform: translate(-50%,-50%);
  color: rgb(20, 163, 163);
  font-weight: bold;
  font-size: .3rem;
  /* background-color: orange; */
  letter-spacing: .03rem;
  padding: 3% 1%;
  border-bottom: .1rem solid rgb(20, 163, 163)
}
.guessContent{
  /* width: 100%; */
  background-color: white;
  overflow: hidden;
  height: 0;
  padding: .23rem .23rem 62% .23rem;
  /* background-color: aqua */


}
.guessContentDesc{
  /* background-color: pink; */
  /* text-overflow:-o-ellipsis-lastline; */
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
}
.guessContentImg{

  /* width: 100%; */
  overflow: hidden;
  height: 0;
  padding-bottom:44%;
  background-color: aqua;
  position: relative;
}
.guessContentImg>img{
  width: 100%;
}
.guessContentImg div{
    width: 100%;
  position: absolute;
  /* background-color: black; */
  background-color: rgba(0, 0, 0, .4);
  bottom:0;
  /* opacity: .5; */
  color:white;
  line-height: .5rem;
  font-size: .2rem;
  padding-left: .1rem;
}
.guessContentImg div>span{
  color: white;
}
.guessContentDesc{
  font-weight: bold;
  /* text-indent: .2rem; */
  margin-top: .1rem;
}
.guessContentPrice{
  display: flex;
  justify-content: space-between;
  margin-top: .3rem;
  color:#666;
  font-size: .2rem;
  align-items: center
}
.guessContentPriceRight{
  color:red;
  font-size: .4rem;
  font-weight: bold;
}
.guessContentPriceRight>span:first-child{
  font-size: .25rem;
}
.guessContentPriceRight>span+span{
  color: #666;
  font-size: .2rem;
  font-weight: 100
}
.guessDescChange{
  position: fixed;
  top:.60rem;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: #fff
}
</style> 