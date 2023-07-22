<template>
  <div class="page-product-news">
    <div class="page-product-news-container">
      <div class="page-product-news-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="15"
          viewBox="0 0 20 15"
        >
          <path
            id="newspaper"
            d="M17.5,6.5V4H0V17.75A1.25,1.25,0,0,0,1.25,19H18.125A1.875,1.875,0,0,0,20,17.125V6.5ZM16.25,17.75h-15V5.25h15ZM2.5,7.75H15V9H2.5Zm7.5,2.5h5V11.5H10Zm0,2.5h5V14H10Zm0,2.5h3.75V16.5H10Zm-7.5-5H8.75V16.5H2.5Z"
            transform="translate(0 -4)"
            fill="#d70018"
          ></path>
        </svg>
        <p>Tin tức sản phẩm</p>
      </div>
      <div class="page-product-news-item">
        <img
          src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/07/cach-ghep-nhac-vao-anh-1.jpg"
          alt=""
          class="product-news-item-img"
        />

        <router-link to="" class="product-news-item-content">
          4 Cách ghép nhạc vào ảnh trên iPhone bằng ứng dụng
        </router-link>
      </div>
      <div class="page-product-news-item">
        <img
          src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/07/OPPO-A58-NBTC-cover.jpeg"
          alt=""
          class="product-news-item-img"
        />

        <router-link to="" class="product-news-item-content">
         OPPO A58 4G đạt nhiều chứng nhận, sắp ra mắt
        </router-link>
      </div>
      <div class="page-product-news-item">
        <img
          src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/07/galaxy-tab-s9-mau-xanh-1.jpeg"
          alt=""
          class="product-news-item-img"
        />

        <router-link to="" class="product-news-item-content">
         Dòng Galaxy Tab S9 sẽ có màu xanh đậm mới cực sang
        </router-link>
      </div>
      <div class="page-product-news-item">
        <img
          src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/07/nothing-phone-2-ra-mat-1.jpg"
          alt=""
          class="product-news-item-img"
        />

        <router-link to="" class="product-news-item-content">
         Nothing Phone (2) ra mắt: Camera 50MP, pin 4700mAh, giá từ 14.2 triệu đồng
        </router-link>
      </div>
      <div class="page-product-news-item">
        <img
          src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/07/Realme-GT-Neo-6-3C-cover.jpeg"
          alt=""
          class="product-news-item-img"
        />

        <router-link to="" class="product-news-item-content">
         Realme GT Neo 6 series được xác nhận có sạc nhanh 240W siêu tốc trên chứng nhận 3C
        </router-link>
      </div>

      <router-link to="" class="page-product-news-btn-add">
        <p> Xem tất cả</p>
        <icon-down />
      </router-link>
    </div>
  </div>
</template>

<script>
import IconDown from '../../icon/IconDown.vue';
export default {
   components:{
      IconDown
   }
};
</script>

<style scoped>
.page-product-news {
  width: calc(100% - 12px);
  height: auto;
}
.page-product-news-container {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.1),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  margin: 0 15px 15px;
  padding: 10px;
  position: relative;
  right: 2px;
}
.page-product-news-title {
  display: flex;
  align-items: center;
  line-height: 1.2;
  margin-bottom: 10px;
  text-align: left;
}
.page-product-news-title p {
  margin-left: 6px;
  font-size: 16px;
  font-weight: 700;
}
.page-product-news-item {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
}
.product-news-item-img  {
   border-radius: 10px;
    height: 64px;
    margin-right: 10px;
    max-width: 100px;
    min-width: 100px;
}
.product-news-item-content{
   color: #444444;
}
.product-news-item-content:hover{
   text-decoration:underline;
}
.page-product-news-btn-add{
   background: #fff;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15);
    color: #212529;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    height: 34px;
    margin: auto;
    max-width: 335px;
    -webkit-text-decoration: none;
    text-decoration: none;
    transition: .3s;
    width: 100%;
    align-items: center;
    justify-content: center;
    
}
.page-product-news-btn-add:hover{
   background-color: #fef2f2;
    border: none;
    color: var(--color--primary);
    border: 1px solid var(--color--primary);
    transition: background-color .5s ease-out;
}
.page-product-news-btn-add p{
   margin-right:6px ;
}
</style>