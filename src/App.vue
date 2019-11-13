<template>
  <div id="app">
    <TopBar v-if="$route.meta.flag"/>
 <router-view></router-view>
  <Location/>
    <Header v-if="$route.meta.flag1"/>
    <router-view></router-view>
    <TabBar v-if="$route.meta.flag"/>
 </div>
</template>

<script>
import TopBar from "./common/componts/topbar";
 import TabBar from "@common/components/tabBar"
import Header from "@common/components/header"
import Location from "@common/components/loctaion"
export default {
  naem:"combo",
  components:{
    TopBar,
     TabBar,
    Header,
    Location
  }
 
}

</script>
<style lang="scss">
  #app{
    height: 100%;
  }
</style>
