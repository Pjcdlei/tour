<template>
    <div class="wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(img,i) of SwiperList" :key="i">
            
                <img :src="img.src" class="swiperImg">
            
        </swiper-slide>
 
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
export default {
    props:{
        SwiperList:Array
    },
    data(){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
            // SwiperList:[
            //     {
            //         src:require('../assets/image/1.jpg'),
            //         to:"javascript:;"
            //     },
            //     {
            //         src:require('../assets/image/2.jpg'),
            //         to:"javascript:;"
            //     },
            //     {
            //         src:require('../assets/image/3.png'),
            //         to:"javascript:;"
            //     },
            //     {
            //         src:require('../assets/image/4.jpg'),
            //         to:"javascript:;"
            //     }
            // ]
        }
    }
}
</script>
<style scoped>
.swiperImg{
    width: 125%;
    /* height: 130%; */
}
.wrapper>>>.swiper-pagination-bullet{
    background:#fff;
}
</style>