<template>
  <div>
    <ul class="list">
      <li @click="letter" v-for="(item,i) of alphabetList" :key="i">{{item.content}}</li>
    </ul>
    <div class="text" ref="distance" :style="hidden">
      {{this.content}}
    </div>
    
  </div>
</template>
<script>
export default {
  props:{
    alphabetList:Array
  },
  data(){
    return{
      // alphabetList:[
      //   {content:'当前'},
      //   {content:"热门城市"},
      //   {content:'A'},
      //   {content:'B'},
      //   {content:'C'},
      //   {content:'D'},
      //   {content:'E'},
      // ],
      content:'',
      hidden:{
        display:'none'
      }
    }
  },
  methods:{
    letter(e){
      this.content=e.target.innerText
      this.$emit('change',this.content)
        for (let i=0;i<this.alphabetList.length;i++){
          if(this.content===this.alphabetList[i].content){
            let distance=0.8+((i+1)*0.3)
            const showElement=this.$refs.distance
            showElement.style="top:"+distance+"rem";
            setTimeout(()=>{
              showElement.style="display:none"
            },600)
          }
        }
    }
  }
}
</script>
<style scoped>
  .list{
    padding-top: .1rem;
    position: fixed;
    top: 1rem;
    right: 0;
    bottom: 0;
    text-align: center;
    background: rgb(228, 236, 243);
    opacity: 0.7;
    /* width: 15% */
    color: #53cabf;
    font-weight: bold
  }
.list>li{
  margin: .1rem 0
}
.text{
  position: absolute;
  top:1rem;
  right: 1.2rem;
  z-index: 100;
  text-align: center;
  background: rgb(122, 216, 127);
  border-radius: .07rem;
  padding:.1rem;
  color: white
}
</style>