<template>
  <div>
    <div class="load" v-if="loading">loading...</div>
    <locationHeader :cities='cities'></locationHeader>
    <locationList :letter="letter" :cities='cities' :hotCities='hotCities'></locationList>
    <locationAlphabet @change="letterChange" :alphabetList='alphabetList'></locationAlphabet>
    
  </div>
</template>
<script>
import locationHeader from '../components/location/locationHeader'
import locationList from '../components/location/locationList'
import locationAlphabet from '../components/location/locationAlphabet'
export default {
  data(){
    return{
      loading:true,
      letter:'',
      alphabetList:[],
      cities:{},
      hotCities:[]
    }
  },
  components:{
    locationHeader,
    locationList,
    locationAlphabet
  },
  methods:{
    letterChange(letter){
      this.letter=letter
    }
  },
  mounted(){
    this.axios.get('/js/city.json')
    .then(res => {
      // console.log(res)
      res=res.data.data;
      if(res){
        this.loading=false
      this.hotCities=res.hotCities
      this.cities=res.cities
      this.alphabetList=res.alphabetList
      }
    })
    .catch(err => {
      console.error(err); 
    })
  }
}
</script>
<style scoped>
.load{
  position: absolute;
  top:50%;
  left:38%;
  color: aquamarine;
  z-index: 10000;
  text-align: center;
  font-size: .7rem;

  
}
</style>