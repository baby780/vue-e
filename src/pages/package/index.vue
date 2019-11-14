<template>
  <div class="package">
      <Topbar  />
      
      <router-view></router-view>
 </div>
</template>

<script>

import Topbar from "../../common/componts/topbar"
export default {
  components:{
      Topbar
  }
 
}

</script>
<style lang="scss" scoped>
 .package{
   height: 100%;
   
 }
</style>
