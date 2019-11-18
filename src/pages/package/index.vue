<template>
  <div class="package">
      <Topbar  v-if="$route.meta.a"/>
      
      <router-view></router-view>
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
      .package{
        height:100%;
      }
</style>
