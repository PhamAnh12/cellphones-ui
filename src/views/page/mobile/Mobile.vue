<template>
  <div class="page-link">
    <div class="page-link-container">
      <div class="page-link-item">
        <icon-home></icon-home>
      </div>
      <router-link to="/" class="page-link-item">Trang chủ</router-link>
      <div class="page-link-item">
        <icon-right />
      </div>
      <div class="page-link-item">Điện thoại</div>
    </div>
  </div>
  <div class="container container-page-product">
    <div class="page-product-banner-img">
      <router-link class="product-banner-img-item" to="">
        <img
          src="https://cdn2.cellphones.com.vn/595x,webp,q80/https://dashboard.cellphones.com.vn/storage/b2s-cate-dday-p1.png"
          alt=""
        />
      </router-link>
      <router-link class="product-banner-img-item" to="">
        <img
          src="https://cdn2.cellphones.com.vn/595x,webp,q80/https://dashboard.cellphones.com.vn/storage/oppo-a78-cate-moban.png"
          alt=""
        />
      </router-link>
    </div>
    <mobile-list-firm />
    <div class="page-product-demand">
      <div class="page-product-demand-title">
        Chọn theo nhu cầu
      </div>
      <div class="page-product-demand-container">
        <div to="" class="product-demand-item">
        <router-link
          class="product-demand-item-link"
          style="
            background-color: rgb(15, 15, 15);
            background-image: url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/c/h/ch_i_game.png);
          "
          to=""
        >
          <span> Chơi game </span>
        </router-link>
      </div>

      <div to="" class="product-demand-item">
        <router-link
          class="product-demand-item-link"
          style="
            background-color: rgb(151, 145, 145);
            background-image: url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/p/i/pin-trau-0092.png);
          "
          to=""
        >
          <span> Pin trâu </span>
        </router-link>
      </div>
      <div to="" class="product-demand-item">
        <router-link
          class="product-demand-item-link"
          style="
            background-color: rgb(145, 105, 105);
            background-image: url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/a/p/apple-iphone-14-pro-iphone-14-pro-max-deep-purple-220907_inline.jpg.large.png);
          "
          to=""
        >
          <span> Dung lượng lớn </span>
        </router-link>
      </div>
      <div to="" class="product-demand-item">
        <router-link
          class="product-demand-item-link"
          style="
            background-color: rgb(109, 95, 95);
            background-image: url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/c/a/cauhinhcao.png);
          "
          to=""
        >
          <span> Cấu hình cao </span>
        </router-link>
      </div>

      <div to="" class="product-demand-item">
        <router-link
          class="product-demand-item-link"
          style="
            background-color: rgb(166, 166, 166);
            background-image: url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/m/o/mong-nhe.png);
          "
          to=""
        >
          <span> Mỏng nhẹ </span>
        </router-link>
      </div>
      <div to="" class="product-demand-item">
        <router-link
          class="product-demand-item-link"
          style="
            background-color: rgb(188, 174, 182);
            background-image: url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/c/a/camera-dt.png);
          "
          to=""
        >
          <span> Chụp ảnh đẹp </span>
        </router-link>
      </div>
      </div>
    </div>
    <div class="page-product-hot-sale">
      <home-hot-sale> </home-hot-sale>
    </div>
    <page-product-filter />
    <div class="page-product-sort">
      <div class="page-product-sort-title">Sắp xếp theo</div>
      <div class="page-product-sort-container">
        <div class="page-product-sort-item">
          <icon-sort-down />
          <span> Giá Cao - thấp </span>
        </div>
        <div class="page-product-sort-item">
          <icon-sort-up />
          <span> Giá thấp - cao </span>
        </div>
        <div class="page-product-sort-item">
          <icon-percent />
          <span> Khuyến mãi hot </span>
        </div>
        <div class="page-product-sort-item product-sort-item--active">
          <icon-see />
          <span> Xem nhiều </span>
        </div>
      </div>
    </div>
    <div class="page-list-product">
      <div
        class="page-list-product-container"
        v-for="(phone, index) in phones"
        :key="index"
      >
        <product-item :product="phone"></product-item>
      </div>
    </div>
    <div class="page-product-add-btn"   >
      <div class="product-add-btn-container" >
        <span> Xem thêm 100 sản phẩm</span>
        <div class="product-add-btn-icon">
          <icon-down ></icon-down>
        </div>
      </div>
    </div>
  </div>
  <page-product-bottom></page-product-bottom>
</template>

<script>
import BSwiper from "../../../components/base/BaseSwiper.vue";
import ProductItem from "../../../components/base/product/ProductItem.vue";
import HomeHotSale from "../home/home-content/HomeHotSale.vue";
import IconHome from "../../../components/base/icon/IconHome.vue";
import IconRight from "../../../components/base/icon/IconRight.vue";
import MobileListFirm from "./mobile-base/MobileListFirm.vue";
import PageProductFilter from "../../../components/base/page-product/PageProductFilter.vue";
import IconSortUp from "../../../components/base/icon/IconSortUp.vue";
import IconSortDown from "../../../components/base/icon/IconSortDown.vue";
import IconPercent from "../../../components/base/icon/IconPercent.vue";
import IconSee from "../../../components/base/icon/IconSee.vue";
import IconDown from "../../../components/base/icon/IconDown.vue";
import PageProductBottom from "../../../components/base/page-product/page-product-bottom/PageProductBottom.vue";
export default {
  components: {
    BSwiper,
    ProductItem,
    IconHome,
    IconRight,
    MobileListFirm ,
    HomeHotSale,
    PageProductFilter ,
    IconSortUp,
    IconSortDown,
    IconPercent,
    IconSee,
    IconDown,
    PageProductBottom,
  },
  data() {
    return {
      colorDown: "#4a4a4a",
      colorDownRed: "#D70018",
      colorDownBlack: "#4a4a4a",
      isBtnHover:false,
      phones: [
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
          title: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "26.490.000",
          priceOld: "29.990.000",
          priceUp: "24.490.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
          title: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
          title: "iPhone 11 64GB | Chính hãng VN/A",
          priceNew: "10.650.000",
          priceOld: "11.990.000",
          priceUp: "10.150.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg",
          title: "iPhone 14  128GB | Chính hãng VN/A",
          priceNew: "18.990.000",
          priceOld: "22.990.000",
          priceUp: "16.990.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_12.png",
          title: "iPhone 14 Pro  128GB | Chính hãng VN/A",
          priceNew: "24.450.000",
          priceOld: "27.990.000",
          priceUp: "22.450.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
          title: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "26.490.000",
          priceOld: "29.990.000",
          priceUp: "24.490.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
          title: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
          title: "iPhone 11 64GB | Chính hãng VN/A",
          priceNew: "10.650.000",
          priceOld: "11.990.000",
          priceUp: "10.150.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg",
          title: "iPhone 14  128GB | Chính hãng VN/A",
          priceNew: "18.990.000",
          priceOld: "22.990.000",
          priceUp: "16.990.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
          title: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "26.490.000",
          priceOld: "29.990.000",
          priceUp: "24.490.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
          title: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
          title: "iPhone 11 64GB | Chính hãng VN/A",
          priceNew: "10.650.000",
          priceOld: "11.990.000",
          priceUp: "10.150.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg",
          title: "iPhone 14  128GB | Chính hãng VN/A",
          priceNew: "18.990.000",
          priceOld: "22.990.000",
          priceUp: "16.990.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
          title: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "26.490.000",
          priceOld: "29.990.000",
          priceUp: "24.490.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
          title: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
          title: "iPhone 11 64GB | Chính hãng VN/A",
          priceNew: "10.650.000",
          priceOld: "11.990.000",
          priceUp: "10.150.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg",
          title: "iPhone 14  128GB | Chính hãng VN/A",
          priceNew: "18.990.000",
          priceOld: "22.990.000",
          priceUp: "16.990.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_12.png",
          title: "iPhone 14 Pro  128GB | Chính hãng VN/A",
          priceNew: "24.450.000",
          priceOld: "27.990.000",
          priceUp: "22.450.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
          title: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "26.490.000",
          priceOld: "29.990.000",
          priceUp: "24.490.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
          title: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
          title: "iPhone 11 64GB | Chính hãng VN/A",
          priceNew: "10.650.000",
          priceOld: "11.990.000",
          priceUp: "10.150.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg",
          title: "iPhone 14  128GB | Chính hãng VN/A",
          priceNew: "18.990.000",
          priceOld: "22.990.000",
          priceUp: "16.990.000",
        },

        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
          title: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
          priceNew: "16.490.000",
          priceOld: "18.990.000",
          priceUp: "15.250.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
          title: "iPhone 11 64GB | Chính hãng VN/A",
          priceNew: "10.650.000",
          priceOld: "11.990.000",
          priceUp: "10.150.000",
        },
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg",
          title: "iPhone 14  128GB | Chính hãng VN/A",
          priceNew: "18.990.000",
          priceOld: "22.990.000",
          priceUp: "16.990.000",
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>