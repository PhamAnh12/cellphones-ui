<template>
    <div class="home-list-product">
      <div class="home-list-product-header">
        <a class="list-product-header-tile">ĐỒNG HỒ THÔNG MINH</a>
        <div class="list-product-header-btn">
          <a href="" class="product-btn-item"> Apple Watch</a>
          <a href="" class="product-btn-item">Samsung</a>
          <a href="" class="product-btn-item">Huawei</a>
          <a href="" class="product-btn-item"> Garmin</a>
          <a href="" class="product-btn-item">Xiaomi</a>
          <a href="" class="product-btn-item">Amazfit</a>
  
          <a href="" class="product-btn-item">Xem tất cả</a>
        </div>
      </div>
      <div class="home-list-product-body">
        
          <b-swiper :products="products"></b-swiper>
          
      </div>
    </div>
  </template>
  
  <script>
  import BSwiper from '../../../../components/base/BaseSwiper.vue';
  export default {
    components: {
        BSwiper
    },
    data() {
    return {
      products: [
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_se.png",
          title: "Apple Watch SE 2022 40mm | Chính Hãng VN/A",
          priceNew: "6.050.000",
          priceOld: "7.490.000",
          priceUp: "5.050.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/p/apple_gps_1_.png",
          title:"Apple Watch Series 8 41mm GPS viền nhôm | Chính hãng VN/A",
          priceNew: "9.090.000",
          priceOld: "11.990.000",
          priceUp: "8.090.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_se.png",
          title: "Apple Watch SE 2022 40mm | Chính Hãng VN/A",
          priceNew: "6.050.000",
          priceOld: "7.490.000",
          priceUp: "5.050.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/p/apple_gps_1_.png",
          title:"Apple Watch Series 8 41mm GPS viền nhôm | Chính hãng VN/A",
          priceNew: "9.090.000",
          priceOld: "11.990.000",
          priceUp: "8.090.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_se.png",
          title: "Apple Watch SE 2022 40mm | Chính Hãng VN/A",
          priceNew: "6.050.000",
          priceOld: "7.490.000",
          priceUp: "5.050.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_se.png",
          title: "Apple Watch SE 2022 40mm | Chính Hãng VN/A",
          priceNew: "6.050.000",
          priceOld: "7.490.000",
          priceUp: "5.050.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/p/apple_gps_1_.png",
          title:"Apple Watch Series 8 41mm GPS viền nhôm | Chính hãng VN/A",
          priceNew: "9.090.000",
          priceOld: "11.990.000",
          priceUp: "8.090.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_se.png",
          title: "Apple Watch SE 2022 40mm | Chính Hãng VN/A",
          priceNew: "6.050.000",
          priceOld: "7.490.000",
          priceUp: "5.050.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/p/apple_gps_1_.png",
          title:"Apple Watch Series 8 41mm GPS viền nhôm | Chính hãng VN/A",
          priceNew: "9.090.000",
          priceOld: "11.990.000",
          priceUp: "8.090.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_se.png",
          title: "Apple Watch SE 2022 40mm | Chính Hãng VN/A",
          priceNew: "6.050.000",
          priceOld: "7.490.000",
          priceUp: "5.050.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_se.png",
          title: "Apple Watch SE 2022 40mm | Chính Hãng VN/A",
          priceNew: "6.050.000",
          priceOld: "7.490.000",
          priceUp: "5.050.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/p/apple_gps_1_.png",
          title:"Apple Watch Series 8 41mm GPS viền nhôm | Chính hãng VN/A",
          priceNew: "9.090.000",
          priceOld: "11.990.000",
          priceUp: "8.090.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_se.png",
          title: "Apple Watch SE 2022 40mm | Chính Hãng VN/A",
          priceNew: "6.050.000",
          priceOld: "7.490.000",
          priceUp: "5.050.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/p/apple_gps_1_.png",
          title:"Apple Watch Series 8 41mm GPS viền nhôm | Chính hãng VN/A",
          priceNew: "9.090.000",
          priceOld: "11.990.000",
          priceUp: "8.090.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_se.png",
          title: "Apple Watch SE 2022 40mm | Chính Hãng VN/A",
          priceNew: "6.050.000",
          priceOld: "7.490.000",
          priceUp: "5.050.000",
        },
      ],
    };
  },
  };
  </script>
  
  <style>
  </style>