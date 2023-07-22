<template>
  <div class="home-list-product">
    <div class="home-list-product-header">
      <router-link to="/mobile" class="list-product-header-tile">ĐIỆN THOẠI NỔI BẬT NHẤT</router-link>
      <div class="list-product-header-btn">
        <a href="" class="product-btn-item">Apple</a>
        <a href="" class="product-btn-item">Samsung</a>
        <a href="" class="product-btn-item">Xiaomi</a>
        <a href="" class="product-btn-item">OPPO</a>
        <a href="" class="product-btn-item">vivo</a>
        <a href="" class="product-btn-item">realme</a>
        <a href="" class="product-btn-item">Nokia</a>
        <a href="" class="product-btn-item">ASUS</a>
        <a href="" class="product-btn-item">Tecno</a>
        <a href="" class="product-btn-item">Xem tất cả</a>
      </div>
    </div>
    <div class="home-list-product-body">
      <b-swiper :products="phones" :gridRows="1"></b-swiper>
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
      phones: [
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
          title: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "26.490.000",
          priceOld: "29.990.000",
          priceUp: "24.490.000",
          percent:22
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
          title: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent:24

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
          title: "iPhone 11 64GB | Chính hãng VN/A",
          priceNew: "10.650.000",
          priceOld: "11.990.000",
          priceUp: "10.150.000",
          percent:26

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg",
          title: "iPhone 14  128GB | Chính hãng VN/A",
          priceNew: "18.990.000",
          priceOld: "22.990.000",
          priceUp: "16.990.000",
          percent:27

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_12.png",
          title: "iPhone 14 Pro  128GB | Chính hãng VN/A",
          priceNew: "24.450.000",
          priceOld: "27.990.000",
          priceUp: "22.450.000",
          percent:12

        },
          {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
          title: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "26.490.000",
          priceOld: "29.990.000",
          priceUp: "24.490.000",
          percent:22
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
          title: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent:24

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
          title: "iPhone 11 64GB | Chính hãng VN/A",
          priceNew: "10.650.000",
          priceOld: "11.990.000",
          priceUp: "10.150.000",
          percent:26

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg",
          title: "iPhone 14  128GB | Chính hãng VN/A",
          priceNew: "18.990.000",
          priceOld: "22.990.000",
          priceUp: "16.990.000",
          percent:27

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_12.png",
          title: "iPhone 14 Pro  128GB | Chính hãng VN/A",
          priceNew: "24.450.000",
          priceOld: "27.990.000",
          priceUp: "22.450.000",
          percent:12

        },
    
      {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
          title: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "26.490.000",
          priceOld: "29.990.000",
          priceUp: "24.490.000",
          percent:22
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
          title: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent:24

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
          title: "iPhone 11 64GB | Chính hãng VN/A",
          priceNew: "10.650.000",
          priceOld: "11.990.000",
          priceUp: "10.150.000",
          percent:26

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg",
          title: "iPhone 14  128GB | Chính hãng VN/A",
          priceNew: "18.990.000",
          priceOld: "22.990.000",
          priceUp: "16.990.000",
          percent:27

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_12.png",
          title: "iPhone 14 Pro  128GB | Chính hãng VN/A",
          priceNew: "24.450.000",
          priceOld: "27.990.000",
          priceUp: "22.450.000",
          percent:12

        },
    
      {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
          title: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "26.490.000",
          priceOld: "29.990.000",
          priceUp: "24.490.000",
          percent:22
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
          title: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
          percent:24

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
          title: "iPhone 11 64GB | Chính hãng VN/A",
          priceNew: "10.650.000",
          priceOld: "11.990.000",
          priceUp: "10.150.000",
          percent:26

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg",
          title: "iPhone 14  128GB | Chính hãng VN/A",
          priceNew: "18.990.000",
          priceOld: "22.990.000",
          priceUp: "16.990.000",
          percent:27

        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_12.png",
          title: "iPhone 14 Pro  128GB | Chính hãng VN/A",
          priceNew: "24.450.000",
          priceOld: "27.990.000",
          priceUp: "22.450.000",
          percent:12

        },
    
    
      ],
    };
  },
};
</script>

<style>
</style>