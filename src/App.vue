<template>
  <div id="app">
    <TopBar v-if="$route.meta.flag"/>
 <router-view></router-view>
 </div>
</template>

<script>
import TopBar from "./common/componts/topbar"
export default {
  naem:"combo",
  components:{
    TopBar,
  }
 
}
</script>

<style lang="scss">

</style>
