<template>
    <div class="home-list-product">
      <div class="home-list-product-header">
        <h2 class="list-product-header-tile">ĐỒ GIA DỤNG</h2>
        <div class="list-product-header-btn">
          <a href="" class="product-btn-item"> Nồi chiên không dầu</a>
          <a href="" class="product-btn-item">Nồi cơm điện</a>
          <a href="" class="product-btn-item">Robot hút bụi</a>
          <a href="" class="product-btn-item"> 
            Máy hút bụi cầm tay</a>
          <a href="" class="product-btn-item">Máy lọc không khí</a>
          <a href="" class="product-btn-item">
            Lò vi sóng</a>
  
          <a href="" class="product-btn-item">Bàn ghế công thái học</a>
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
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/may-loc-khong-khi-xiaomi-mi-air-purifier-4-lite.png",
          title: "Máy lọc không khí Xiaomi Air Purifier 4 Lite",
          priceNew: "2.690.000",
          priceOld: "3.990.000",
          priceUp: "1.690.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/may-loc-khong-khi-xiaomi-air-purifier-4-compact_1.png",
          title:"Máy lọc không khí Xiaomi Air Purifier 4 Compact",
          priceNew: "1.890.000",
          priceOld: "2.590.000",
          priceUp: "1.790.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/may-loc-khong-khi-xiaomi-mi-air-purifier-4-lite.png",
          title: "Máy lọc không khí Xiaomi Air Purifier 4 Lite",
          priceNew: "2.690.000",
          priceOld: "3.990.000",
          priceUp: "1.690.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/may-loc-khong-khi-xiaomi-air-purifier-4-compact_1.png",
          title:"Máy lọc không khí Xiaomi Air Purifier 4 Compact",
          priceNew: "1.890.000",
          priceOld: "2.590.000",
          priceUp: "1.790.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/may-loc-khong-khi-xiaomi-mi-air-purifier-4-lite.png",
          title: "Máy lọc không khí Xiaomi Air Purifier 4 Lite",
          priceNew: "2.690.000",
          priceOld: "3.990.000",
          priceUp: "1.690.000",
        },
      ],
    };
  },
  };
  </script>
  
  <style>
  </style>