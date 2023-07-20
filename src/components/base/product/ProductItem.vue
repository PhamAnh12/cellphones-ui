<template>
  <div class="product-container">
    <div class="product-item">
      <div class="product-item-content">
        <a href="" class="product-item-link">
          <div class="product-item-img">
            <img
              :src="product.img"
            
              alt=""
            />
          </div>
          <div class="product-item-title">
           {{ product.title }}
          </div>
          <div class="product-item-price">
            <div class="product-item-price-new">{{ product.priceNew }}₫</div>
            <div class="product-item-price-old">{{ product.priceOld }}₫</div>
            <div class="product-item-price-percent">
              <p>Giảm {{product.percent}}% </p>
            </div>
          </div>
          <div class="product-item-price-up">
            Giá lên đời: <span class="">{{ product.priceUp }} ₫</span>
          </div>
        </a>
        

        <div class="product-item-list-icon">
          <icon-star />
          <icon-star />
          <icon-star />
          <icon-star />
          <icon-star />
        </div>
      </div>
      <div class="product-item-footer">
           <p>Yêu thích</p>
           <div class="product-item-icon-heart" @mousemove="isIconHeart=false;isIconHeartRed=true" @mouseout="isIconHeart=true;isIconHeartRed=false" >
             <icon-heart  v-show="isIconHeart"/>
             <icon-heart-red v-show="isIconHeartRed" />
           </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import IconHeart from '../icon/IconHeart.vue';
import IconStar from "../icon/IconStar.vue";
import IconHeartRed from '../icon/IconHeartRed.vue';


export default {
  components: {
    IconStar,
    IconHeart,
    IconHeartRed
  },
  props:{
    product: Object
  },
  data(){
    return{
      isIconHeart:true,
      isIconHeartRed:false,
    }
  }

};
</script>

<style scoped>
.product-container {
  min-height: 202px;
  width:calc(100% - 5px);
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.1),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  border-radius: 15px;
  position: relative;
  height: auto;
 
}
.product-item {
  width: 100%;
  padding: 10px 10px 35px 10px;
}
.product-item-img img {
  width: 160px;
  height: 160px;
  margin-top:10px;
}
.product-item-img {
  text-align: center;
}
.product-item-title {
  height: 64px;
  font-weight: 700;
  font-size: 14px;
  text-align: left;

}
.product-item-price {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.product-item-price-new,
.product-item-price-up span {
  font-weight: 700;
  font-size: 16px;
  color: var(--color--primary);
}
.product-item-price-up{
  font-size: 14px;
  text-align: left;
}
.product-item-price-up {
  margin-bottom: 10px;
}
.product-item-price-old {
  font-weight: 600;
  font-size: 14px;
  text-decoration: line-through;
  color: #707070;
  margin-left: 4px;
}
.product-item-list-icon {
  margin-top: 5px;
  display: flex;
  align-items: center;
}
.product-item-coupon {
  align-items: flex-start;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  display: flex;
  font-size: 12px;
  line-height: 1.5;
  margin-left: 0;
  overflow: hidden;
  padding: 5px;
  text-transform: none;
  width: auto;
}
.product-item-price-percent {
 
  height: 31px;
  left: -15px;
  position: absolute;
  top: -1px;
  width: 80px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 26px;
  margin: 0 0 10px 10px;
  background: var(--color--primary);
  z-index: 2;
}
.product-item-price-percent p{
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    margin: 5px 0 0;
    text-align: center;
    width: 100%;
}
.product-item-price-percent ::before{
    content: "";
    position: absolute;
    left: 0px;
    bottom: -3px;
    width: 6px;
    height: 6px;
    background: var(--color--primary);
    border-radius: 10px;
    z-index: 1;

}
.product-item-footer{
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 10px;

}
.product-item-footer p{
  font-size: 12px;
}
.product-item-footer .product-item-icon-heart{
  display: flex;
  align-items: center;
  margin-left: 6px;
  cursor: pointer;
}


</style>
