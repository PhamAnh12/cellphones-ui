<template>
  <div class="home-list-product">
    <div class="home-list-product-header">
      <a class="list-product-header-tile">LAPTOP</a>
      <div class="list-product-header-btn">
        <a href="" class="product-btn-item">Macbook</a>
        <a href="" class="product-btn-item">Thinhpad</a>
        <a href="" class="product-btn-item">Asus</a>
        <a href="" class="product-btn-item">HP</a>
        <a href="" class="product-btn-item">Surface</a>
        <a href="" class="product-btn-item">Acer</a>
        <a href="" class="product-btn-item">MSI</a>
        <a href="" class="product-btn-item">Dell</a>
        <a href="" class="product-btn-item">Xem tất cả</a>
      </div>
    </div>
    <div class="home-list-product-body">
      <b-swiper :products="laptops"></b-swiper>
    </div>
  </div>
</template>
<script>
import BSwiper from "../../../../components/base/BaseSwiper.vue";
export default {
  components: {
    BSwiper,
  },
  data() {
    return {
      laptops: [
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png",
          title: "Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "18.750.000",
          priceOld: "22.990.000",
          priceUp: "16.750.000",
          percent: 10,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook_air_m22.png",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 22,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/6/3/636688207026676028_macbookair-1_1.jpg",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 18,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook_air_m22.png",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 12,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_512gb.png",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 14,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png",
          title: "Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "18.750.000",
          priceOld: "22.990.000",
          priceUp: "16.750.000",
          percent: 10,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook_air_m22.png",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 22,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/6/3/636688207026676028_macbookair-1_1.jpg",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 18,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook_air_m22.png",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 12,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_512gb.png",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 14,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png",
          title: "Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "18.750.000",
          priceOld: "22.990.000",
          priceUp: "16.750.000",
          percent: 10,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook_air_m22.png",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 22,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/6/3/636688207026676028_macbookair-1_1.jpg",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 18,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook_air_m22.png",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 12,
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_512gb.png",
          title: "Apple MacBook Air M2 256GB 2020 I Chính hãng Apple Việt Nam",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent: 14,
        },
      ],
    };
  },
};
</script>

<style>
</style>