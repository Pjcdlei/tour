<template>
  <div class="list wrapper" ref="wrapper" >
    <div class="content" >
    <div class="present">
      <div class="presentTitle" ref="present">当前</div>
      <div class="presentButton" @click="presentClick()">{{this.$store.state.city}}</div>
    </div>
    <div class="hot">
      <div class="hotTitle" ref="hot">热门城市</div>
      <div class="hotList">
        <div  v-for="(item,i) of hotCities" :key="i"  class="hotButton" @click="currentClick(item.name)">{{item.name}}</div>
      </div>
    </div>
    <div class="alphabet">
      <div v-for="(item,i) of cities" :key="i" :ref="i"  class="alphabetWrapper">
        <div class="alphabetTitle">{{i}}</div>
        <div class="alphabet" >
          <div v-for="(item,i) of item" :key="i" class="alphabetButton" @click="alphClick(item.name)">{{item.name}}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  // import BMap from 'BMap'
export default {
  props:{
    letter:String,
    hotCities:Array,
    cities:Object
  },
  methods:{
    currentClick(city){
      this.$store.dispatch('change',city)
      this.$router.push('/')
    },
    alphClick(city){
      this.$store.dispatch('change',city)
      this.$router.push('/')
    },
    presentClick(){
      this.$router.push('/')
    }
  },
  watch:{
    letter(){
      // console.log(this.letter)
      const elementLetter=this.$refs[this.letter]
      const elementPresent=this.$refs.present
      const elementHot=this.$refs.hot
      // console.log(elementLetter)
      if(elementLetter){
        const element=elementLetter[0]
        this.scroll.scrollToElement(element)
      }
      else if(elementPresent){
        this.scroll.scrollToElement(elementPresent)
      }
      else{
        this.scroll.scrollToElement(elementHot)
      }
      

    }
  },
  data(){
    return{

      city:'',
      // hotCities:[
      //   {name:'北京'},
      //   {name:'上海'},
      //   {name:'成都'},
      //   {name:'深圳'},
      //   {name:'杭州'}
      // ],
      // cities:{
      //   A:[
      //     {name:'安庆'},
      //     {name:'安康'},
      //     {name:'安溪'},
      //     {name:'安东'},
      //     {name:'安溪'},
      //     {name:'安东'},
      //     {name:'安溪'},
      //     {name:'安东'},
      //     {name:'安溪'},
      //     {name:'安东'},
      //   ],
      //   B:[
      //     {name:'安庆'},
      //     {name:'安康'},
      //     {name:'安溪'},
      //     {name:'安东'},
      //     {name:'安溪'},
      //     {name:'安东'},
      //     {name:'安溪'},
      //     {name:'安东'},
      //     {name:'安溪'},
      //     {name:'安东'},
      //     {name:'安溪'},
      //     {name:'安东'},
      //     {name:'安溪'},
      //     {name:'安东'},
      //   ],
      // }
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      mouseWheel:{//随着滚轮滚动
        speed:20,
        invert:false,
        easeTime:300 
      }
  })
  // let map=new BMap.Map('allmap')
  // let myCity = new BMap.LocalCity();
  // myCity.get((result)=>{
  //   if(result){
  //     this.city=result.name
  //   }else{
  //     this.city="正在获取位置信息"
  //   }
  // })
  }
}
</script>

<style scoped>
  .list{
    background-color: rgb(238, 243, 247);
    overflow: hidden;
    position: absolute;
    top:1rem;
    /* left:0; */
    bottom:0;
    width: 100%;
    /* height: 10rem; */
  }
.presentTitle,.hotTitle,.alphabetTitle
{
  margin: .0 .4rem;
  padding: .25rem 0
}
.presentButton,.hotButton,.alphabetButton{
  background-color: white;
  line-height: .7rem;
}
.presentButton{
  width:85%;
  margin-left: .2rem;
  padding-left: .2rem;
}
.hotList{
  display: flex;
  flex-wrap: wrap;
  width: 90%;
}
.hotButton{
  width: 2rem;
  margin-left: .25rem;
  margin-bottom: .15rem;
  text-align: center
}

.alphabetButton{
  padding-left: .2rem;
  border-bottom: .01rem solid #eee;
  width:100%
}
.alphabetWrapper{
  background-color: white
}
</style>
