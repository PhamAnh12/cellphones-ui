<template>
  <div class="product-content-bottom">
    <div class="product-content-bottom-left">
      <page-product-block-content />
      <page-product-question />

    </div>
    <div class="product-content-bottom-right"></div>
  </div>
</template>

<script>
import IconDown from "../../icon/IconDown.vue";
import PageProductBlockContent from './PageProductBlockContent.vue';
import PageProductQuestion from './PageProductQuestion.vue';
export default {
  components: {
    IconDown,
    PageProductQuestion,
    PageProductBlockContent
  },
};
</script>

<style scoped>
.product-content-bottom {
  width: 100%;
  margin-top: 15px;
}
.product-content-bottom-left {
  max-width: 830px;
}
.product-content-bottom-right {
  width: calc(100% - 830px);
}

</style>