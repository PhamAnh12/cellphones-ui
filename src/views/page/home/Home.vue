<template>
  <div class="container ">
    <home-top></home-top>
    <home-content></home-content>
  </div>
</template>

<script>
import HomeTop from "../home/home-top/HomeTop.vue";
import HomeContent from "../home/home-content/HomeContent.vue";
export default {
  components: {
    HomeTop,
    HomeContent,
  },
};
</script>

<style  scoped>
.content-container{
    width: 1220px;
    min-height: calc(100vh - 600px);
    background: #fff;
    padding: 0 10px;
    margin-top: 120px;
    margin-bottom: 20px;

}
</style>