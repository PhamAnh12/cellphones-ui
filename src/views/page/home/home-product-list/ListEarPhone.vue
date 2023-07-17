<template>
  <div class="home-list-product">
    <div class="home-list-product-header">
      <a href="" class="list-product-header-tile">ÂM THANH</a>
      <div class="list-product-header-btn">
        <a href="" class="product-btn-item"> Tai nghe Bluetooth</a>
        <a href="" class="product-btn-item">Tai nghe không dây</a>
        <a href="" class="product-btn-item">Tai nghe Gaming</a>
        <a href="" class="product-btn-item"> Tai nghe chụp tai</a>
        <a href="" class="product-btn-item">Loa Bluetooth</a>
        <a href="" class="product-btn-item"> Loa Karaoke</a>

        <a href="" class="product-btn-item">Loa Soundbar</a>
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
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_169_2.png",
          title: "Tai nghe Bluetooth Apple AirPods 2 | Chính hãng Apple Việt Nam",
          priceNew: "2.660.000",
          priceOld: "3.990.000",
          priceUp: "2.660.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_150_1_3.png",
          title:"Tai nghe không dây Samsung Galaxy Buds Live",
          priceNew: "1.150.000",
          priceOld: "4.490.000",
          priceUp: "1.000.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_169_2.png",
          title: "Tai nghe Bluetooth Apple AirPods 2 | Chính hãng Apple Việt Nam",
          priceNew: "2.660.000",
          priceOld: "3.990.000",
          priceUp: "2.660.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_150_1_3.png",
          title:"Tai nghe không dây Samsung Galaxy Buds Live",
          priceNew: "1.150.000",
          priceOld: "4.490.000",
          priceUp: "1.000.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_150_1_3.png",
          title:"Tai nghe không dây Samsung Galaxy Buds Live",
          priceNew: "1.150.000",
          priceOld: "4.490.000",
          priceUp: "1.000.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_169_2.png",
          title: "Tai nghe Bluetooth Apple AirPods 2 | Chính hãng Apple Việt Nam",
          priceNew: "2.660.000",
          priceOld: "3.990.000",
          priceUp: "2.660.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_150_1_3.png",
          title:"Tai nghe không dây Samsung Galaxy Buds Live",
          priceNew: "1.150.000",
          priceOld: "4.490.000",
          priceUp: "1.000.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_169_2.png",
          title: "Tai nghe Bluetooth Apple AirPods 2 | Chính hãng Apple Việt Nam",
          priceNew: "2.660.000",
          priceOld: "3.990.000",
          priceUp: "2.660.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_150_1_3.png",
          title:"Tai nghe không dây Samsung Galaxy Buds Live",
          priceNew: "1.150.000",
          priceOld: "4.490.000",
          priceUp: "1.000.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_150_1_3.png",
          title:"Tai nghe không dây Samsung Galaxy Buds Live",
          priceNew: "1.150.000",
          priceOld: "4.490.000",
          priceUp: "1.000.000",
        },
      ],
    };
  },
  };
  </script>

<style>
</style>