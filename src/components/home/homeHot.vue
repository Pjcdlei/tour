<template>
    <div class="hot">
      <div class="hotLeft">
          <div class="leftCounter row">
            <div class="limit">限时抢购</div>
            <div class="count">距结束 <span>{{hour}}</span>:<span>{{minute}}</span>:<span>{{second}}</span></div>
          </div>
          <div class="leftContent row" v-for="(item,i) of contentList" :key="i">
              <div class="contentImg">
                  <img  :src="item.imgUrl">
              </div>
              <div class="contentDesc">{{item.desc}}</div>
          </div>
          <div class="leftPrice row" v-for="(item,i) of priceList" :key="'b'+i">
            <div class="priceSale">
                限量<span>{{item.num}}</span>份
            </div>
            <div class="priceNum">
              <span>￥</span>{{item.price}}<span>起</span>
            </div>
          </div>
      </div>

      <div class="hotRight">
        <div class="rightItem row" v-for="(item,i) of categoryList" :key="'a'+i">
          <div class="itemDesc">{{item.title}}
            <p>{{item.desc}}</p>
          </div>
          <div class="itemImg">
            <img :src="item.imgUrl">
          </div>
        </div>
      </div>
    </div>
</template>
<script>

export default {
    props:{
      contentList:Array,
      priceList:Array,
      categoryList:Array,
    },
    // filters:{
    //   omit(oldVal){
    //     if(oldVal.length>30){
    //       let a=oldVal.substr(0,29)
    //       return a+"..."
    //     }
    // }},
    methods:{
      countdown(){
          var date=(new Date('2020/2/25')-(new Date()))
          if(date>0){
            let time=date/1000
            this.hour = parseInt((time % (60 * 60 * 24)) / 3600)<10?('0'+parseInt((time % (60 * 60 * 24)) / 3600)):parseInt((time % (60 * 60 * 24)) / 3600)
            this.minute = parseInt(((time % (60 * 60 * 24)) % 3600) / 60)<10?('0'+parseInt(((time % (60 * 60 * 24)) % 3600) / 60)):parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          this.second = parseInt(((time % (60 * 60 * 24)) % 3600) % 60)<10?('0'+parseInt(((time % (60 * 60 * 24)) % 3600) % 60)):parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          }else{
            this.hour='00'
            this.minute='00'
            this.second='00'
          }
      }
    },
    mounted(){
        setInterval(() => {
        this.countdown()
      }, 1000);
      
      
    },
    data(){
      return{
        hour:'',
        minute:'',
        second:''
        // contentList:[
        //   {
        //   imgUrl:require('../assets/image/th.jpg'),
        //   desc:'【周末不涨价】西太湖名都国际会议中心豪华双床间1晚+双人自助晚餐+欢迎水果、安睡奶+儿童乐园、乒乓球室、台球室'
        //   }
        // ],
        // priceList:[
        //   {num:999,price:999}
        // ],
        // categoryList:[
        //   {title:'快乐寒假',desc:"亲子旅行记",imgUrl:require('../assets/image/qzy.jpg')},
        //   {title:'温泉爆款',desc:"又到一年温泉季",imgUrl:require('../assets/image/qzy1.jpg')}
        // ]

      }
    }
    
}
</script>
<style scoped>
  .row{
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }
  .hot{
    margin-top: .2rem;
    display: flex;
    /* background: pink; */
    
  }
  .hotLeft{
    flex: 1.1;
    background: white;
    padding: .1rem .1rem .1rem .1rem
  }
    .leftCounter{
    margin-top: .18rem
  }
  .limit{
    color: rgb(230, 105, 105);
    font-weight: 600;
    font-size: .34rem;
    font-style: italic
  }
  .count>span{
    background: black;
    color: white;
  }

  .leftContent{
    margin-top: .2rem;
  }
  .contentImg{
    /* width:5rem;
    height:rem */
  }
  .contentImg>img{
    width:.88rem;
    height: .88rem;
  }
  .contentDesc{
    /* padding-bottom: .1rem; */
    line-height: .3rem;
    margin-left: .2rem;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:3;
  }

  .leftPrice{
    margin-top: .35rem;
    
  }
  .priceNum{
    color: tomato;
    font-size: .38rem;
  }
  .priceNum>span+span{
    color: #666;
    font-size: .2rem
  }
  .priceNum>span:first-of-type{
    color: tomato;
    font-size: .2rem
  }
  
  .hotRight{
    flex: 1;
    /* background: green; */
    margin-left: .1rem;
    /* padding: 0 .1rem 0 0 */
  }
  .rightItem{
    background: white;
    padding-top: .25rem;
    padding-left: .1rem;
    margin-bottom: .03rem

  }
  .itemDesc{
    font-size: .28rem;
    font-weight: 600;
    
  }
  .itemDesc>p{
    margin-top: .12rem;
    color: #666;
    font-size: .1rem;
  }

  .itemImg>img{
    width:1rem;height:1rem;
    border-radius: .5rem;
    position: relative;
    bottom:.1rem;
    right:.1rem
  }

</style>