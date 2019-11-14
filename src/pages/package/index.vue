<template>
  <div class="package">
      <Topbar  />
      
      <router-view></router-view>
    <TabBar />
 </div>
</template>

<script>

import Topbar from "../../common/componts/topbar"
import TabBar from "../../common/components/tabBar"
export default {
  components:{
      Topbar,
      TabBar,
  }
 
}

</script>
<style scoped lang="scss">
 
</style>
