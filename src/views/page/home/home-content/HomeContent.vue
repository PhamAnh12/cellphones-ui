<template>
  <div>
    <div class="home-horizonta-banner">
      <a
        href="
       "
      >
        <img
          src="https://cdn2.cellphones.com.vn/1200x75,webp,q100/https://dashboard.cellphones.com.vn/storage/b2s-special-desktop-dday-p1.png"
          alt=""
        />
      </a>
    </div>
    <home-hot-sale />
    <list-phone />
    <list-laptop />
    <list-screen />
    <list-ipad />
    <list-ear-phone />
    <list-clock />
    <list-smart-home />
    <list-tivi />
    <list-accessory />
    <list-accessory-computer />
    <list-old />

    <div class="home-brand-banner">
      <a href="" class="home-brand-banner-title"> ƯU ĐÃI THANH TOÁN </a>
      <div class="home-brand-banner-content">
        <a href="" class="home-brand-banner-item">
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/ocb-sliding-uudaithanhtoan.png"
            alt=""
          />
        </a>
        <a href="" class="home-brand-banner-item">
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/Sliding-vpbank-bew0995.png"
            alt=""
          />
        </a>
        <a href="" class="home-brand-banner-item">
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-sli-vib.png"
            alt=""
          />
        </a>
        <a href="" class="home-brand-banner-item">
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-uu-dai-shopeepay.png"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="home-brand-banner">
      <a href="" class="home-brand-banner-title"> CHUYÊN TRANG THƯƠNG HIỆU </a>
      <div class="home-brand-banner-content">
        <a href="" class="home-brand-banner-item">
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-sliding-apple-112.png"
            alt=""
          />
        </a>
        <a href="" class="home-brand-banner-item">
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/th-hieu-ss-0013.png"
            alt=""
          />
        </a>
        <a href="" class="home-brand-banner-item">
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/SIS%20asus.png"
            alt=""
          />
        </a>
        <a href="" class="home-brand-banner-item">
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/xiaomi.png"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="home-news-tech">
      <a href="" class="home-news-tech-title">TIN CÔNG NGHỆ</a>
      <div class="home-news-tech-content">
        <a href="" class="home-news-tech-item">
         <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/07/teaser-Pova-Neo-3-cover.jpeg" alt="">
         <p>Thêm thông só kỹ thuật của Tecno Prova Neo 3 được tiết lộ</p>
        </a>
        <a href="" class="home-news-tech-item">
          <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/07/Dell-G2524H.jpg" alt="">
          <p>Mán hình chơi game Dell G2524H ra mắt: IPS 24.5 inch, tần số quét...</p>
        </a>
         <a  href=" " class="home-news-tech-item">
          <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/07/cach-ban-hang-tren-lazada-1.jpg" alt="">
          <p>Cách bán hàng trên Lazada bằng điện thoại, đăng ký đơn giản</p>
         </a>
         <a  href=" " class="home-news-tech-item">
          <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/07/cach-de-biet-ai-vao-facebook-cua-minh.jpg" alt="">
          <p>Cách để biết ai vào Facebook của mình nhiều nhất chính xác</p>
         </a>
           
      </div>
    </div>
  </div>
</template>

<script>
import HomeHotSale from "./HomeHotSale.vue";
import ListPhone from "../home-product-list/ListPhone.vue";
import ListLaptop from "../home-product-list/ListLaptop.vue";
import ListScreen from "../home-product-list/ListScreen.vue";
import ListIpad from "../home-product-list/ListIpad.vue";
import ListEarPhone from "../home-product-list/ListEarPhone.vue";
import ListClock from "../home-product-list/ListClock.vue";
import ListTivi from "../home-product-list/ListTivi.vue";
import ListSmartHome from "../home-product-list/ListSmartHome.vue";
import ListAccessory from "../home-product-list/ListAccessory.vue";
import ListAccessoryComputer from "../home-product-list/ListAccessoryComputer.vue";
import ListOld from "../home-product-list/ListOld.vue";
export default {
  components: {
    HomeHotSale,
    ListPhone,
    ListLaptop,
    ListScreen,
    ListIpad,
    ListEarPhone,
    ListClock,
    ListTivi,
    ListSmartHome,
    ListAccessory,
    ListAccessoryComputer,
    ListOld,
  },
};
</script>

<style scoped>
</style>
