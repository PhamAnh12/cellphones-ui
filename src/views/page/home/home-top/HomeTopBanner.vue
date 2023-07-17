<template>
  <div class="home-top-banner-container">
 
      <img
        src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/khai-truong-soc-trang-sliding-th7.png"
        alt=""
      />
      
   

    <div class="top-banner-content">
      <div  class="top-banner-content-item banner-content-item--active">
        <h5>MÙNG KHAI TRƯƠNG</h5>
        <p>Giảm đến 87%</p>
      </div>
      <div class="top-banner-content-item">
        <h5>IPHONE 14 PRO MAX</h5>
        <p>Giá siêu ưu đãi</p>
      </div>
      <div class="top-banner-content-item">
        <h5>SIÊU SALE SAMSUNG</h5>
        <p>Bùng cháy ưu đãi</p>
      </div>
      <div class="top-banner-content-item">
        <h5>REMI NOTE 12 MỚI</h5>
        <p>Sống bật chất</p>
      </div>
      <div class="top-banner-content-item">
        <h5>LÒ VI SÓNG</h5>
        <p>Mở bán giá sốc</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-top-banner-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
}

.home-top-banner-container img {
  width: 100%;
}
.home-top-banner-list-img {
  display: flex;
  align-items: center;
  overflow: hidden;
  
}
.top-banner-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-banner-content-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  width: 25%;
  height: 64px;
  position: relative;
}
.top-banner-content-item p {
  font-size: 12px;
}
.banner-content-item--active p {
  font-weight: 600;
}
.banner-content-item--active h5 {
  font-weight: 600;
}
.banner-content-item--active::after {
  content: "";
  position: absolute;
  width: 100%;
  background: var(--color--primary);
  height: 2px;
  bottom: 0;
  left: 0;
}
.top-banner-content-item:hover {
  background: #f7f7f7;
}
</style>