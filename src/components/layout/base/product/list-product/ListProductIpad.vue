<template>
  
    <div class="home-list-product">
        <div class="home-list-product-header">
          <h2 class="list-product-header-tile">MÁY TÍNH BẢNG</h2>
          <div class="list-product-header-btn">
            <a href="" class="product-btn-item">iPad 10.9 inch 2022</a>
            <a href="" class="product-btn-item">iPad Air</a>
            <a href="" class="product-btn-item">iPad Pro</a>
            <a href="" class="product-btn-item">
                Lenovo</a>
            <a href="" class="product-btn-item">Samsung</a>
            <a href="" class="product-btn-item">
                Xiaomi</a>
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
    data (){
        return{
            products:[
                {
                    img:"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ipad-pro-12-9-2021-2_2_1_1_1_1_1.png",
                    title:"iPad Pro 12.9 2021 M1 5G 128GB I Chính hãng Apple Việt Nam",
                    priceNew:"25.590.000",
                    priceOld:"33.990.000",
                    priceUp:"24.590.000"

                    
                },
                {
                    img:"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ipad-pro-2021-11inch-grey_2.jpg",
                    title:"iPad Pro 11 2021 M1 WiFi 128GB I Chính hãng Apple Việt Nam",
                    priceNew:"18.990.000",
                    priceOld:"23.990.000",
                    priceUp:"17.990.000"

                    
                },
                {
                    img:"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ipad-pro-12-9-2021-2_2_1_1_1_1_1.png",
                    title:"iPad Pro 12.9 2021 M1 5G 128GB I Chính hãng Apple Việt Nam",
                    priceNew:"25.590.000",
                    priceOld:"33.990.000",
                    priceUp:"24.590.000"

                    
                },
                {
                    img:"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ipad-pro-2021-11inch-grey_2.jpg",
                    title:"iPad Pro 11 2021 M1 WiFi 128GB I Chính hãng Apple Việt Nam",
                    priceNew:"18.990.000",
                    priceOld:"23.990.000",
                    priceUp:"17.990.000"

                    
                },  {
                    img:"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ipad-pro-2021-11inch-grey_2.jpg",
                    title:"iPad Pro 11 2021 M1 WiFi 128GB I Chính hãng Apple Việt Nam",
                    priceNew:"18.990.000",
                    priceOld:"23.990.000",
                    priceUp:"17.990.000"

                    
                },
            ]
        }
    }
   
  };
  </script>

<style>

</style>