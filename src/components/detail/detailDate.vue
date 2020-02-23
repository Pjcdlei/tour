<template>
  <div class="date">
    <div class="dateWrap">
    <div v-for="(item,i) of dateList" :key="i" class="dateItem">
      <div>{{item.date}}</div>
      <div>￥{{item.price}}起</div>
    </div>
    </div>
    <div class="more">
      更多日期
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      dateList:[
        {
        date:'3月13日',
        price:'599'
        },
        {
        date:'3月13日',
        price:'599'
        },
        {
        date:'3月13日',
        price:'599'
        },
    ]
    }
  }
  
}
</script>
<style scoped>
.date{
  background: white;
  margin-top: .14rem;
  padding: .3rem .2rem;
  display: flex;
  justify-content: space-between
}
.dateWrap{
  display: flex;
  
}
.dateItem{
  /* background: pink; */
  margin-right: .1rem;
  width: 1.2rem;
  padding: .1rem .1rem  ;
  text-align: center;
  border: .02rem solid #ccc;
}
.dateItem>div{
  /* font-size: .2rem; */
}
.dateItem>div+div{
  color: rgb(241, 116, 26);
  font-size: .1rem;
  padding-top: .06rem;
}
.more{
  margin-right: .1rem;
  width: .8rem;
  padding: .1rem .1rem  0 .1rem;
  text-align: center;
  /* border: .02rem solid #ccc; */
}
</style>