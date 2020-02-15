<template>
  <div class="wrapper">
    <div class="item" v-for="(item,i) of Navlist" :key="i">
        <div class="icon">
            <img :src="item.src" class="iconImg">
        </div>
        <div class="desc">{{item.desc}}</div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        Navlist:Array
    },
    data(){
        return{
            // Navlist:[
            //     {
            //         src:require('../assets/image/fc.png'),
            //         desc:'周边游'
            //     },
            //     {
            //         src:require('../assets/image/bt.png'),
            //         desc:'国内游'
            //     },
            //     {
            //         src:require('../assets/image/cj.png'),
            //         desc:'出境游'
            //     },
            //     {
            //         src:require('../assets/image/xl.png'),
            //         desc:'自由行'
            //     },
            // ]
        }
    }
}
</script>
<style scoped>
.wrapper{
    display: flex;
    justify-content: space-around;
    background: white;
    padding-bottom: .3rem;
}
.icon{
    /* background: greenyellow;
    border-radius: 3rem */
}
.iconImg{
    width:.8rem;
    margin:.14rem 0 .14rem 0
}
</style>