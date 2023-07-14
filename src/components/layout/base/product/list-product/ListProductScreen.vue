<template>
  <div class="home-list-product">
    <div class="home-list-product-header">
      <h2 class="list-product-header-tile">MÀN HÌNH, MÁY TÍNH ĐỂ BÀN</h2>
      <div class="list-product-header-btn">
        <a href="" class="product-btn-item">Máy tính để bàn</a>
        <a href="" class="product-btn-item">Build PC</a>
        <a href="" class="product-btn-item">PC Gaming</a>
        <a href="" class="product-btn-item">PC Đồ Họa</a>
        <a href="" class="product-btn-item">PC Đồng bộ</a>
        <a href="" class="product-btn-item">Màn hình văn phòng</a>
        <a href="" class="product-btn-item">Màn hình Gaming</a>
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
import ProductItem from "../ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_176_2_.png",
          title: "PC Gaming Asus ROG Strix GT15 G15CF-71270F110W",
          priceNew: "36.990.000",
          priceOld: "45.990.000",
          priceUp: "34.490.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/c/pc-cps-gaming-g8-amd-0010.png",
          title: "PC Gaming Asus ROG Strix GT15 G15CF-71270F110W",
          priceNew: "36.990.000",
          priceOld: "45.990.000",
          priceUp: "34.490.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/c/pc-cps-gaming-g7-amd-30.png",
          title: "PC Gaming Asus ROG Strix GT15 G15CF-71270F110W",
          priceNew: "36.990.000",
          priceOld: "45.990.000",
          priceUp: "34.490.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_176_2_.png",
          title: "PC Gaming Asus ROG Strix GT15 G15CF-71270F110W",
          priceNew: "36.990.000",
          priceOld: "45.990.000",
          priceUp: "34.490.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/c/pc-cps-gaming-g8-amd-00001_1.png",
          title: "PC Gaming Asus ROG Strix GT15 G15CF-71270F110W",
          priceNew: "26.990.000",
          priceOld: "35.990.000",
          priceUp: "24.490.000",
        },
      ],
    };
  },
};
</script>
<style>
</style>