<template>
  <div class="home-list-product">
    <div class="home-list-product-header">
      <h2 class="list-product-header-tile">ÂM THANH</h2>
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
      <div class="home-list-product-row">
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