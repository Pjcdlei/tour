<template>
    <div  class="home">
        <homeHeader class="homeHeader" :City="data.city"></homeHeader>
        <homeSwiper :SwiperList="data.SwiperList"></homeSwiper>
        <homeNav :Navlist="data.Navlist"></homeNav>
        <homeHot :contentList="data.contentList" :priceList="data.priceList" :categoryList="data.categoryList"></homeHot>
        <homeWeekend :weekSwiperList="data.weekSwiperList"></homeWeekend>
        <homeGuess :guessContentList="data.guessContentList"></homeGuess>
    </div>
</template>

<script>
import homeHeader from '../components/home/homeHeader'
import homeSwiper from '../components/home/homeSwiper'
import homeNav from '../components/home/homeNav'
import homeHot from '../components/home/homeHot'
import homeWeekend from '../components/home/homeWeekend'
import homeGuess from '../components/home/homeGuess'
export default {
    components:{
        homeHeader,
        homeSwiper,
        homeNav,
        homeHot,
        homeWeekend,
        homeGuess
    },
    data(){
        return{
            data:{}
        }
    },
    methods:{
        getHomeData(){
            this.axios.get("/js/index.json")
            .then(res => {
                // console.log(res);
                if(res.data){
                    this.data=res.data.data
                }

            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
    mounted(){
        this.getHomeData()
    }
}
</script>
<style scoped>
.home{
    position: relative;
    /* background: gray */
}
.homeHeader{
    position:fixed;
    top:0;left: 0;
    z-index: 100;
    width:100%
}
</style>