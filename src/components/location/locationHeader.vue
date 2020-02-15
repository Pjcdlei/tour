<template>
  <div class="search">
    <div class="searchWrap">
      <span class="iconfont">&#xe60b;</span>
      <input v-model="keyword" class="searchInput" type="text" placeholder="请输入城市"
      :class="changeSearch">
      <button class="button" :class="changeButton" @click="buttonClear">取消</button>
      <span class="cancel" :class="changeSymbol" @click="xClear">X</span>
    </div>
    <div class="searchContent" v-show="list.length" ref="content">
      <ul>
        <li class="searchFirst">{{show}}</li>
        <li  @click="itemClick(item.name)" class="searchItem" v-for="(item,i) of list" :key="i">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {disreslove} from '../../utils/utils.js'
import BScroll from 'better-scroll'
export default {
  props:{
    cities:Object
  },
  data(){
    return{
      flag:'1',
      show:'请输入城市名。。',
      list:[

      ],
      iLetter:'',
      iWord:'',
      keyword:'',
      changeSearch:'',
      changeButton:'',
      changeSymbol:''
    }
  },
  methods:{
    itemClick(city){
      this.$store.dispatch('change',city)
      this.$router.push('/')
    },
    xClear(){
      this.keyword=' '
      this.flag='3'
    },
    buttonClear(){
      this.keyword=' '
      this.flag='2'
    },
    addClass(){
      this.changeSearch='changeSearch'
      this.changeButton='changeButton'
      this.changeSymbol='changeSymbol'
    },
    removeClass(){
      this.changeSearch=''
      this.changeButton=''
      this.changeSymbol=''
    },
    removeBack(){
      this.removeClass()
      this.list=[]
      this.show='请输入城市名。。'
    },
    showError(){
      this.list=['']
      this.show='找不到'+this.keyword
    },
    loop(lower){
      const citiesWrapper=this.cities
      for(let i in citiesWrapper){
        if(i.toLowerCase().indexOf(lower.substr(0,1))>-1){
          let arr=[]
          citiesWrapper[i].forEach((value)=>{
            arr.push(value.spell.substr(lower.length-1,1))
            let a=[...new Set(arr)]
            this.iLetter=a.toString()
          })
        }
      }
    },
    loopWord(content){
      const citiesWrapper=this.cities
      for(let i in citiesWrapper){
        
        if(i.toLowerCase().indexOf(disreslove(content.substr(0,1)).substr(0,1))>-1){
          let arr=[]
          citiesWrapper[i].forEach((value)=>{
            arr.push(value.name.substr(content.length-1,1))
            let a=[...new Set(arr)]
            this.iWord=a.toString()
          })
        }
      }
    },
    searchAlph(content){
      const lower=content.toLowerCase()
        let result=[]
        for(let i in this.cities){
          if(i.toLowerCase().indexOf(lower.substr(0,1))>-1){
            this.cities[i].forEach((value)=>{
              if(value.spell.indexOf(lower)>-1){
                result.push(value)
                this.list=result
              }else if(lower.indexOf(value.spell)>-1){
                this.show='对不起，找不到'+this.keyword
              }else{
                this.loop(lower)
                if(!(this.iLetter.indexOf(lower.substr(lower.length-1,1))>-1)){
                  this.show='对不起，找不到'+this.keyword
                  this.iLetter=''
                }
              }
            })
          }else if(lower.substr(0,1)==='u'||lower.substr(0,1)==='i'||lower.substr(0,1)==='v'||lower.substr(0,1)==='o'){
            this.show='对不起，找不到'+this.keyword
            this.list=['']
          }
        }
    }
  },
  watch:{
    keyword(){
      let content=this.keyword.trim()
      this.addClass()
      if(content===''){
        if(this.flag==='1'){
        this.removeBack()
        }else if(this.flag==='2'){
          this.keyword=''
          this.removeBack()
        }else{
          this.keyword=''
        }
      }else if(/^\d+$/.test(content)){
        this.showError()


      }else if(/^[a-zA-z]+$/.test(content)){
        this.searchAlph(content)




      }else if(/^[\u4e00-\u9fa5]+$/.test(content)){
        let result=[]
        for(let i in this.cities){
          let haveAlph=i.toLowerCase().indexOf(disreslove(content.substr(0,1)).substr(0,1))>-1
          if(haveAlph){
            this.cities[i].forEach((value)=>{
              if(value.name.indexOf(content)>-1){
                this.show='请输入城市名'
                result.push(value)
                this.list=result
              }else if(content.indexOf(value.name)>-1){
                this.show='对不起，找不到'+this.keyword
              }else{
                this.loopWord(content)
                if(!(this.iWord.indexOf(content.substr(content.length-1,1))>-1)){
                  this.show='对不起，找不到'+this.keyword
                  this.iWord=''
                }
              }
            })
          }
        }


      }else{
        this.showError()
      }
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.content,{
      click:true,
      mouseWheel:{//随着滚轮滚动
        speed:20,
        invert:false,
        easeTime:300 
      }
  })
  }
}
</script>
<style scoped>
.search{
  background-color: rgb(221, 230, 236);
  padding: .2rem;
}
.searchInput{
  box-sizing: border-box;
  width: 100%;
  height: .6rem;
  border-radius: .1rem;
  padding-left: .5rem;

}
.iconfont{
  position: absolute;
  top: .34rem;
  padding-left: .1rem;
  font-size: .34rem;
  color: #666
}
.searchContent{
  overflow:hidden;
  position:absolute;
  z-index:1;
  top:1rem;
  left:0;
  right:0;
  bottom:0;
  background:#eee
}
.searchFirst{
  line-height:.22rem;
    padding:.1rem;
    margin-bottom:.06rem;
    /* color:#666; */
    background:#fff;
    font-size:.2rem;
    color:#aaa
}
.searchItem{
  line-height:.82rem;
    padding-left:.2rem;
    margin-bottom:.06rem;
    color:#666;
    background:#fff
}
.changeSearch{
  width:88%;
  margin-right:.1rem
}
.button{
  display:none
}
.changeButton{
  display:block;
    color:#888;
    background-color: rgba(0, 0, 0, 0);
    font-weight:bold;
    position:absolute;
    top:.24rem;
    right:.22rem;
    z-index:101;
    font-size:.34rem;
    text-align:center
}
.cancel{
  display:none
}
.changeSymbol{
  display:block;
    position:absolute;
    top:.2rem;
    right:1.3rem;
    color:rgb(58, 219, 112);
    font-size: .4rem;
    z-index:101;
    /* background:#ccc; */
    padding:.12rem;
    /* border-radius:.2rem */
}
</style>