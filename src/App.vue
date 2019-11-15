<template>
  <div id="app">
    <Location />
    <Header v-if="$route.meta.flag1" />
    <router-view></router-view>
    <TabBar v-if="$route.meta.flag" />
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import TabBar from "@common/components/tabBar";
import Header from "@common/components/header";
import Location from "@common/components/loctaion";
import axios from "axios";
export default {
  name: "combo",
/*   data(){
    return
  }, */
  components: {
    TabBar,
    Header,
    Location
  }
};
</script>
<style scoped >
#app {
  height: 100%;
}
</style>



