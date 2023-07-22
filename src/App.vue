npm<script setup>
</script>

<template>
  <the-header />
  <the-content />
  <the-footer  />
</template>
<script>
import TheContent from "./components/layout/TheContent.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheContent,
    TheHeader,
    TheFooter,
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
</style>
