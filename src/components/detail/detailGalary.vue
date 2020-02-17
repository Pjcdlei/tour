<template>
  <div class="galary1">
    <ly-tab
      class="tabColor"
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleClick">
      
    </ly-tab>
    <div class="cate">
      <span>全部</span>
      <span>其他</span>
    </div>
    <component :is="type"></component>
  </div>
</template>
<script>
import galaryContent from './galaryContent'
export default {
    components:{galaryContent},
  data () {
    return {
      type:'galaryContent',
      galaryList:[
        '无锡拈花客栈',
        '无锡拈花客栈',
        '无锡拈花客栈',
        '无锡拈花客栈',
        '上海迪士尼'
      ],
      selectedId: 0,
      items: [
      ],
      options: {
        activeColor: '#1d98bd'
      },
    }
  },
  methods:{
    handleClick(item,index){
      // console.log(index)
      // console.log(item)
      this.$store.state.index=index
    }
  },
  computed:{
    loopgalaryList(){
      for (var i=0;i<this.galaryList.length;i++){
        let item={label:this.galaryList[i]}
        this.items.push(item)
    }
  }
  },
  mounted(){
    this.loopgalaryList
    
  }
}
</script>
<style scoped>
.galary1>>>.ly-tab-item-label{
    color:#666
}
.galary1{
  position: absolute;
  top: .8rem;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  background-color: white;
}
/* .galary>a{
  color:#000;
} */
/* .tabColor{
  background-color: rgb(240, 212, 217);
  border-color: green;
  border-radius: .3rem;
} */
.cate{
  background-color: #edf0f5;
  line-height: .6rem;
  color: #000;
}
.cate>span{
  margin-left: .22rem;
  font-size: .3rem;
}
/* .wrapper{
  background-color: #fff;
}
.imgWrapper{
  width:47%;
  background: red;
  margin: .12rem;
  float: left;
}
.imgWrapper>img{
  width: 100%
} */
</style>