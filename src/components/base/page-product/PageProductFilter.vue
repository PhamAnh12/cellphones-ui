<template>
  <div class="page-product-criteria">
    <div class="product-criteria-container">
      <div class="product-criteria-item">
        <icon-filter />
        <span>Bộ lọc</span>
      </div>
      <div class="product-criteria-item">
        <icon-truck />
        <span>Sẵn hàng</span>
      </div>
      <div class="product-criteria-item">
        <icon-money />
        <span>Giá</span>
      </div>
      <div class="product-criteria-item">
        <p>Nhu cầu sử dụng</p>
        <div class="product-criteria-item-icon">
          <icon-down></icon-down>
        </div>
      </div>
      <div class="product-criteria-item">
        <p>Loại điện thoại</p>
        <div class="product-criteria-item-icon">
          <icon-down></icon-down>
        </div>
      </div>
      <div class="product-criteria-item">
        <p>Bộ nhớ trong</p>
        <div class="product-criteria-item-icon">
          <icon-down></icon-down>
        </div>
      </div>
      <div class="product-criteria-item">
        <p>Dung lượng RAM</p>
        <div class="product-criteria-item-icon">
          <icon-down></icon-down>
        </div>
      </div>
      <div class="product-criteria-item">
        <p>Tính năng đặc biệt</p>
        <div class="product-criteria-item-icon">
          <icon-down></icon-down>
        </div>
      </div>
      <div class="product-criteria-item">
        <p>Tính năng camera</p>
        <div class="product-criteria-item-icon">
          <icon-down></icon-down>
        </div>
      </div>
      <div class="product-criteria-item">
        <p>Tần số quét</p>
        <div class="product-criteria-item-icon">
          <icon-down></icon-down>
        </div>
      </div>
      <div class="product-criteria-item">
        <p>Kích thước màng hình</p>
        <div class="product-criteria-item-icon">
          <icon-down></icon-down>
        </div>
      </div>
      <div class="product-criteria-item">
        <p>Kiểu màn hình</p>
        <div class="product-criteria-item-icon">
          <icon-down></icon-down>
        </div>
      </div>
      <div class="product-criteria-item">
        <p>Chíp sử lí</p>
        <div class="product-criteria-item-icon">
          <icon-down></icon-down>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import IconFilter from "../icon/IconFilter.vue";
import IconTruck from "../icon/IconTruck.vue";
import IconDown from "../icon/IconDown.vue";
import IconMoney from "../icon/IconMoney.vue";
export default {
  components: {
    IconFilter,
    IconDown,
    IconMoney,
    IconTruck,
  },
};
</script>

<style>
</style>