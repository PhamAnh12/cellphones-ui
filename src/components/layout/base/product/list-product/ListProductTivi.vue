<template>
  <div class="home-list-product">
    <div class="home-list-product-header">
      <h2 class="list-product-header-tile">TIVI</h2>
      <div class="list-product-header-btn">
        <a href="" class="product-btn-item">Samsung</a>
        <a href="" class="product-btn-item">Xiaomi</a>
        <a href="" class="product-btn-item">Toshiba</a>
        <a href="" class="product-btn-item">LG</a>
        <a href="" class="product-btn-item">Sony</a>
        <a href="" class="product-btn-item">Casper</a>

        <a href="" class="product-btn-item"> Coocaa</a>
        <a href="" class="product-btn-item">Xem tất cả</a>
      </div>
    </div>
    <div class="home-list-product-body">
        <div class="home-list-product-row">
            <div
              class="list-product-row-container"
              v-for="(product, index) in products"
              :key="index"
            >
              <product-item :product="product" />
            </div>
          </div>
    </div>
  </div>
</template>
  
<script>
import ProductItem from '../ProductItem.vue';
export default {
  components: {
      ProductItem
  },
  data() {
    return {
      products: [
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_74_38.jpg",
          title: "Android Tivi Xiaomi P1 55 inch",
          priceNew: "7.990.000",
          priceOld: "11.990.000",
          priceUp: "7.000.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_i_xu_ng_24__1_5_1.png",
          title:"Android Tivi Xiaomi P1 43 inch",
          priceNew: "5.990.000",
          priceOld: "9.990.000",
          priceUp: "5.000.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/i/tivi-xiaomi-a-32-inch-hd_1_1_1.png",
          title: "Android Tivi Xiaomi P1 55 inch",
          priceNew: "7.990.000",
          priceOld: "11.990.000",
          priceUp: "7.000.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_i_xu_ng_24__1_5_1.png",
          title:"Android Tivi Xiaomi P1 43 inch",
          priceNew: "5.990.000",
          priceOld: "9.990.000",
          priceUp: "5.000.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_74_38.jpg",
          title: "Android Tivi Xiaomi P1 55 inch",
          priceNew: "7.990.000",
          priceOld: "11.990.000",
          priceUp: "7.000.000",
        },
      ],
    };
  },
};
</script>
  
  <style>
</style>