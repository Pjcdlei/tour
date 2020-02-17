<template>
  <div>
    <detailHeader></detailHeader>
    <detailSwiper></detailSwiper>
    <detailMap></detailMap>
    <router-view></router-view>
  </div>
</template>
<script>
import detailHeader from '../components/detail/detailHeader'
import detailSwiper from '../components/detail/detailSwiper'
import detailMap from '../components/detail/detailMap'
export default {
  name:'detail',
  components:{
    detailHeader,
    detailSwiper,
    detailMap
  }
}
</script>
<style scoped>

</style>