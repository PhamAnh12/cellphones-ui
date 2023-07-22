<template>
  <div class="product-content-bottom">
    <div class="product-content-bottom-left">
      <page-product-block-content />
      <page-product-question />
      <page-product-q-a />

    </div>
    <div class="product-content-bottom-right">
      <page-product-news />
    </div>
  </div>
</template>

<script>
import IconDown from "../../icon/IconDown.vue";
import PageProductBlockContent from './PageProductBlockContent.vue';
import PageProductQuestion from './PageProductQuestion.vue';
import PageProductQA from "./PageProductQA.vue";
import PageProductNews from "./PageProductNews.vue";
export default {
  components: {
    IconDown,
    PageProductQuestion,
    PageProductBlockContent,
    PageProductQA,
    PageProductNews,
  },
};
</script>

<style scoped>
.product-content-bottom {
  width: 100%;
  margin-top: 15px;
  display: flex;
}
.product-content-bottom-left {
  max-width: 830px;
}
.product-content-bottom-right {
  width: calc(100% - 830px);
  margin-left: 15px;
  margin-bottom: 15px;
}

</style>