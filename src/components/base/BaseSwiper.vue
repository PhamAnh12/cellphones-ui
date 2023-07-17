<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#3a3a3a',
    }"
    :modules="modules"
    :slides-per-view="5"
    :space-between="6"
    :grid="{
      rows: gridRows,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :rewind="true"
   
  >
    <swiper-slide v-for="(product, index) in products" :key="index">
      <product-item :product="product"
    /></swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Grid, Navigation, Autoplay } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
//
import ProductItem from "./product/ProductItem.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductItem,
  },
  props: {
    products: Array,
    gridRows: Number,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay, Grid],
    };
  },
};
</script>

  <style>
.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: red;
  height: calc((100% - 30px) / 2) !important;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>