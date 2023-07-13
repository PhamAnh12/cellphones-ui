<template>
  <div class="home-top">
    <div class="home-top-left">
       <HomeTopMenu  />
    </div>
    <div class="home-top-banner">
       <HomeTopBanner />
    </div>
    <div class="home-top-right">
       <HomeTopRight />
    </div>
  </div>
</template>

<script>
import HomeTopMenu from './HomeTopMenu.vue';
import HomeTopRight from './HomeTopRight.vue';
import HomeTopBanner from './HomeTopBanner.vue';
export default {
    components:{
        HomeTopMenu,
        HomeTopRight,
        HomeTopBanner
    }
};
</script>

<style scoped>
.home-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  height: 376px;
 
}
.home-top-left, .home-top-banner {
    border-radius: 15px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15);
    display: block;
    height: 376px;
    margin-right: 15px;
    overflow: auto;
    width: 205px;
}

.home-top-right {
  width: 256px;
  height: 376px;
}
.home-top-banner {
  width: calc(100% - 470px);
  cursor: pointer;
  
}
</style>