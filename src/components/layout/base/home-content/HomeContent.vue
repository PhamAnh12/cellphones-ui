<template>
  <div>
    <div class="home-horizonta-banner">
      <a
        href="
       "
      >
        <img
          src="https://cdn2.cellphones.com.vn/1200x75,webp,q100/https://dashboard.cellphones.com.vn/storage/b2s-special-desktop-dday-p1.png"
          alt=""
        />
      </a>
    </div>
    <home-hot-sale />
    <list-product-phone />
    <list-product-laptop />
     <list-product-screen />
    <list-product-ipad /> 
    <list-product-ear-phone />
    <list-product-clock />
    <list-product-smart-home />
    <list-product-tivi />    
  </div>
</template>

<script>
import HomeHotSale from "./HomeHotSale.vue";
import ListProductPhone from "../product/list-product/ListProductPhone.vue";
import ListProductLaptop from "../product/list-product/ListProductLaptop.vue";
import ListProductScreen from "../product/list-product/ListProductScreen.vue";
import ListProductIpad from "../product/list-product/ListProductIpad.vue";
import ListProductEarPhone from "../product/list-product/ListProductEarPhone.vue";
import ListProductClock from "../product/list-product/ListProductClock.vue";
import ListProductTivi from "../product/list-product/ListProductTivi.vue";
import ListProductSmartHome from "../product/list-product/ListProductSmartHome.vue";
export default {
  components: {
    HomeHotSale,
    ListProductPhone,
    ListProductLaptop,
    ListProductScreen,
    ListProductIpad,
    ListProductEarPhone,
    ListProductClock,
    ListProductTivi,
    ListProductSmartHome,
  },
};
</script>

<style scoped>
</style>
