<template>
  <div class="content">
    <div class="allmap" ref="allmap">

    </div>
    <div class="tab">
      <div class="arrow"
      @click="handleArrowClick">V</div>
      <navbar class="page-part" v-model="selected">
        <tab-item id="1">酒店</tab-item>
        <tab-item id="2">景点</tab-item>
      </navbar>
      <tab-container v-model="selected">
        <tab-container-item id="1">
          <cell v-for="(item,i) of addressList[0]" :title="item.title" :key="i" :label="item.label" @click.native="handleCellClick(i+1)"></cell>
        </tab-container-item>
        <tab-container-item id="2">
          <cell v-for="(item,i) of addressList[1]" :title="item.title" :key="i" :label="item.label" @click.native="handleCellClick(i+1)"></cell>
        </tab-container-item>
      </tab-container>
    </div>
    
  </div>
</template>
<script>
import {Navbar,TabItem,TabContainer,TabContainerItem,Cell} from 'mint-ui'
import markerImg from '../../../public/image/markerImg.png'
export default {
  methods:{
    handleArrowClick(){
      if(this.clickFlag==='0'){
        this.$refs.allmap.style.height='20%'
        this.clickFlag='1'
      }else{
        this.$refs.allmap.style.height='60%'
        this.clickFlag='0'
      }
    },
    addMasker(m,n){
      let map=new BMap.Map(this.$refs.allmap)
      let myGeo=new BMap.Geocoder()
      for(let i=0;i<this.addressList.length;i++){
        for(let j=0;j<this.addressList[i].length;j++){
          let title=this.addressList[m][n]
          myGeo.getPoint(this.addressList[i][j].title,function(point){
            // console.log(point)
            if(point){
              if(i===m&&j===n){
                map.centerAndZoom(point,11)
                let myIcon=new BMap.Icon(markerImg,new BMap.Size(50,50),{
                  imageOffset:new BMap.Size(14,2)
                })
                let marker=new BMap.Marker(point,{icon:myIcon})
                map.addOverlay(marker)
              }else{
                map.centerAndZoom(point,11)
                let marker=new BMap.Marker(point)
                map.addOverlay(marker)
                //添加信息窗口
                // let opts={
                //   width:6,
                //   height:6
                // }
                let infoWindow=new BMap.InfoWindow(title.title)
                infoWindow.setWidth(150)
                infoWindow.setHeight(60)
                map.openInfoWindow(infoWindow,map.getCenter())
              }
            }else{
              console.log('NONE')
            }
          })
        }
      }
    },
    changeMasker(id){
      let page=parseInt(this.flag)-1
        let index=parseInt(id)-1
        this.addMasker(page,index)    
    },
    handleCellClick(id){
      if(this.flag==='1'){
        this.changeMasker(id)
      }else{
        this.changeMasker(id)
      }
    }
  },
  watch:{
    //判断点击的方向 左 右、？
    selected(val){
      if(val==='1'){
        this.flag='1'
      }else{
        this.flag='2'
      }
    }
  },
  mounted(){this.addMasker(0,0)},
  components:{
    Navbar,TabItem,TabContainer,TabContainerItem,Cell
  },
  data(){
    return{
      clickFlag:'0',
      flag:'1',
      selected:'1',
      addressList:[
        [
          {
            label:'无锡滨湖区马山环山西路68号',
            title:'无锡灵山小镇拈花湾客栈'
          },
          {
            label:'马山环山西路68号拈花湾景区内',
            title:'无锡拈花湾拈花客栈'
          }
        ],
        [
          {
            label:'无锡市滨湖区鼋渚路1号',
            title:'无锡市鼋头渚'
          },
          {
            label:'无锡市梁溪区古华山路通惠西路交叉口',
            title:'无锡惠山古镇'
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
  .allmap{
    height: 60%;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: .6rem;
    z-index: 1000
  }
  .tab{
    color: #000
  }
  .arrow{
    text-align: center
  }
</style>