<template>
  <div>
    <detailHeader></detailHeader>
    <detailSwiper></detailSwiper>
    <detailTitle></detailTitle>
    <detailRecommend></detailRecommend>
    <detailComment></detailComment>
    <detailMap></detailMap>
    <detailDate></detailDate>
    <router-view></router-view>
  </div>
</template>
<script>
import detailHeader from '../components/detail/detailHeader'
import detailSwiper from '../components/detail/detailSwiper'
import detailMap from '../components/detail/detailMap'
import detailTitle from '../components/detail/detailTitle'
import detailRecommend from '../components/detail/detailRecommend'
import detailComment from '../components/detail/detailComment'
import detailDate from '../components/detail/detailDate'
export default {
  name:'detail',
  components:{
    detailHeader,
    detailSwiper,
    detailMap,detailTitle,detailRecommend,detailComment,detailDate
  }
}
</script>
<style scoped>

</style>