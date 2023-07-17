<template>
  <div class="home-hotsale">
    <div class="home-hotsale-header">
      <div class="home-hotsale-container-btn">
        <div class="home-hotsale-btn-phone">Điện Thoại,TV</div>
        <div class="home-hotsale-btn-pk">Phụ kiện</div>
      </div>
      <div class="home-hotsale-content">
        <img
          src="https://cdn2.cellphones.com.vn/x,webp/media/catalog/product/h/o/hot-sale-use-for-home-page.png"
          alt=""
        />
      </div>
      <div class="home-hotsale-time">
        <p>Kết thúc sau:</p>
        <div class="home-hotsale-time-item">01</div>
        <p>:</p>
        <div class="home-hotsale-time-item">23</div>
        <p>:</p>
        <div class="home-hotsale-time-item">38</div>
        <p>:</p>
        <div class="home-hotsale-time-item">54</div>
      </div>
    </div>
    <div class="home-hotsale-body">
       <b-swiper :products="hotSales"></b-swiper>
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
      hotSales: [
        {
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/4/_/4_45_20.jpg",
          title: "Tivi Xiaomi",
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
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/4/_/4_45_20.jpg",
          title: "Tivi Xiaomi",
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
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/4/_/4_45_20.jpg",
          title: "Tivi Xiaomi",
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
          img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/4/_/4_45_20.jpg",
          title: "Tivi Xiaomi",
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
      ],
      hotSale: {
        img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
        title: "iPhone 11 64GB | Chính hãng VN/A",
        priceNew: "10.650.000",
        priceOld: "11.990.000",
        priceUp: "10.150.000",
      },
    };
  },
};
</script>

<style scoped>
.home-hotsale {
  background: linear-gradient(rgb(55, 4, 93), rgb(137, 8, 91)) 0% 0% / cover;
  border-radius: 10px;
  margin: 0 0 15px;
  min-height: 350px;
  padding: 8px;
}
.home-hotsale-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.home-hotsale-container-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-hotsale-btn-phone {
  background: #fc0f0e;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-right: 10px;
  padding: 4px 10px;
}
.home-hotsale-btn-pk {
  background: #ffffff;
  border-radius: 6px;
  color: #fc0f0e;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-right: 10px;
  padding: 4px 10px;
}

.home-hotsale-time {
  color: #fc0f0e;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 700;
}
.home-hotsale-time-item {
  background: #fff;
  border-radius: 3px;
  font-weight: 700;
  font-size: 14px;
  height: 25px;
  padding: 2px 5px;
  text-align: center;
  width: 25px;
  margin: 4px;
}
.home-hotsale-time p {
  font-weight: 700;
}
.home-hotsale-time-item:last-child {
  margin-right: 0;
}
.home-hotsale-body {
  width: 100%;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.swiper-slide{
  background: none;
}
  
</style>