<template>
  <div class="content">
    <div class="allmap"></div>
    <div class="tab">
      <div class="arrow">V</div>
      <navbar class="page-part" v-model="selected">
        <tab-item id="1">酒店</tab-item>
        <tab-item id="2">景点</tab-item>
      </navbar>
      <tab-container v-model="selected">
        <tab-container-item id="1">
          <cell v-for="(item,i) of addressList[0]" :title="item.title" :key="i" :label="item.label"></cell>
        </tab-container-item>
        <tab-container-item id="2">
          <cell v-for="(item,i) of addressList[1]" :title="item.title" :key="i" :label="item.label"></cell>
        </tab-container-item>
      </tab-container>



      <!-- <mt-tab-container :active.sync="selected">
  <mt-tab-container-item id="1">
    <mt-cell  v-for="(item,i) of addressList[0]" :title="item.title" :key="i" :label="item.label"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="(item,i) of addressList[1]" :title="item.title" :key="i" :label="item.label"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container> -->
    </div>
    
  </div>
</template>
<script>
import {Navbar,TabItem,TabContainer,TabContainerItem,Cell} from 'mint-ui'
export default {
  components:{
    Navbar,TabItem,TabContainer,TabContainerItem,Cell
  },
  data(){
    return{
      selected:'1',
      addressList:[
        [
          {
            label:'北京大栅栏',
            title:'北京大栅栏1'
          },
          {
            label:'北京天安门',
            title:'北京天安门'
          }
        ],
        [
          {
            label:'北京颐和园',
            title:'北京颐和园2'
          },
          {
            label:'北京圆明园',
            title:'北京圆明园2'
          }
        ],
      ]
    }
  }
}
</script>
<style scoped>
  .content{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 120
  }
  /* .change{
    height: 30%;
  } */
  /* .allmap{
    height: 60%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .6rem;
    z-index: 1000
  } */
  .tab{
    color: #000
  }
  .arrow{
    text-align: center
  }
</style>