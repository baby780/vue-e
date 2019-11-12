<template>
  <div id="app">
    <Location/>
    <Header v-if="$route.meta.flag1"/>
    <router-view></router-view>

    <TabBar v-if="$route.meta.flag" />
   
  </div>
</template>
<script>
 import TabBar from "@common/components/tabBar"
import Header from "@common/components/header"
import Location from "@common/components/loctaion"
export default {
  name:"App",
  components:{
    TabBar,
    Header,
    Location
 
  
  
  },
  created(){
   
  }
}
</script>
<style lang="scss">
  #app{
    height: 100%;
  }
</style>
