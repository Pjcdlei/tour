<template>
    <div class="header" :class="header1">
        <div class="headerBack" :class="back">
            <span class="iconfont">&#xe620;</span>
        </div>
        <div class="headerSearch" :class="search"> <span class="iconfont">&#xe60b;</span> 搜索上海迪士尼</div>
        
        <div class="headerCity" :class="city">
            <router-link to="/Location" class="headerCity" :class="city">{{this.$store.state.city}}</router-link>
            <span class="iconfont"> &#xe626;</span>
        </div>
        
    </div>
</template>
<script>
export default {
    props:["City"],
    data(){
        return{
                header1:'',
                back:'',
                search:'',
                city:''
            
        }
    },
    methods:{
    scrollChange(){
        let height=document.documentElement.scrollTop;
      // console.log(height)
        if(height>10){
        this.header1='header1';
        this.back='back';
        this.search='search';
        this.city='city';
        }else{
        this.header1='';
        this.back='';
        this.search='';
        this.city=''
        }
    }
    },
    mounted() {
    window.addEventListener('scroll',this.scrollChange)
    },
}
</script>
<style scoped>
.header{
    line-height: .8rem;
    text-align:center;
    display: flex;
    align-items: center;
}
.headerBack{
    flex:1;
    color: white
}
.headerSearch{
    flex: 6;
    background-color:white ;
    /* opacity: 0.3; */
    box-shadow: 0 0 .05rem .01rem #666;
    border-radius: .5rem;
    /* height: .60rem; */
    line-height: .5rem;
    margin:0 .2rem 0 .2rem;
    color: #aaa
}
.headerCity{
    flex:1.5;
    color: white
    /* background-color: aqua */
}
.header1{
    background: white;
    z-index: 100;
}
.back{
    color: #666;
}
.search{
    background-color: rgb(221, 226, 231);
    box-shadow: 0 0 0 0;
    /* color: #aaa */
}
.city{
    color: black
}
</style>