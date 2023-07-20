npm<script setup>
</script>

<template>
  <the-header />
  <the-content />
  <the-footer v-if="isFooter" />
</template>
<script>
import TheContent from "./components/layout/TheContent.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import Common from "../src/script/common.js";
export default {
  components: {
    TheContent,
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      isFooter: Common.getIsFooter(),
    };
  },
};
</script>
<style scoped>
</style>
