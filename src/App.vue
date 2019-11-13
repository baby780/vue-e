<template>
  <div id="app">
    <TopBar v-if="$route.meta.flag"/>
 <router-view></router-view>
 
    
 </div>
</template>

<script>
import TopBar from "./common/componts/topbar";

import Header from "@common/components/header"
import Location from "@common/components/loctaion"
export default {
  naem:"combo",
  components:{
    TopBar,
    
    Header,
    Location
  }
 
}

</script >
<style scoped >
  #app{
    height: 100%;
  }
</style>
