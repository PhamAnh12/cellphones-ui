<script setup>
</script>

<template>
  <div>
    <TheHeader />
    <TheContent />  
    <TheFooter /> 
  </div>
 
</template>
<script>
import TheContent from "./components/layout/TheContent.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
   components :{
    TheContent,
    TheHeader,
    TheFooter
   }
}
</script>
<style scoped>

</style>
