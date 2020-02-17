<template>

  <div>
    <router-link to="map" append>
    <div class="map">
      <div class="mapLeft">
        <div class="mapLeftDesc">
          <span>上海</span>
          <span class="address">酒店地址</span>
        </div>
        <div class="mapLeftAddress">
          滨湖区马山环山西路23号
        </div>
      </div>
      <div class="mapRight">
        <div class="desc">地图</div>
        <div class="icon">></div>
      </div>
    </div>
    </router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .map{
    height: 1.5rem;
    font-size: .3rem;
    background: #fff;

  }
  .mapLeft{
    float: left;
    width: 80%
  }
  .mapLeftDesc{
    margin-left: .2rem;
    margin-top: .2rem;
    margin-bottom: .2rem;
    font-weight: bold;

  }
  .address{
    border:.02rem solid #000;
    color: #aaa
  }
  .mapRight{
    float: right;
    width: 20%;
    text-align: center;
    position: relative;
  }
  .desc{
    position: absolute;
    top:.6rem;
    right: .6rem;
    color: #aaa;

  }
  .icon{
    position: absolute;
    top: .6rem;
    right: .2rem;
  }
</style>