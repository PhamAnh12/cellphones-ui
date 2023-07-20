<template>
  <div class="content-container">
    <router-view></router-view>
  </div>
  
  
</template>

<script>

export default {
  components :{
   
  }
}
</script>

<style  scoped>
.content-container{
    width: 1220px;
    min-height: calc(100vh - 600px);
    background: #fff;
    padding: 0 10px;
    margin-top: 120px;
    margin-bottom: 20px;
    margin-left:auto ;
    margin-right:auto ;

}
</style>

