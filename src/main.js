import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../src/assets/style/border.css'
import '../src/assets/style/reset.css'
import '../src/assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
// axios.defaults.baseURL="http://localhost:8080"
Vue.prototype.axios=axios
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
  let map=new BMap.Map('allmap')
  let myCity = new BMap.LocalCity();
  myCity.get((result)=>{
    if(result){
      this.$store.state.city=result.name
    }else{
      this.$store.state.city="北京"
    }
  })
  },
}).$mount('#app')
