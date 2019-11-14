<template>
  <div class="city">
    <div class="main">
      <div class="head">
        <i class="iconfont icon-fanhui"></i>
        城市选择
      </div>
      <div class="nav">
        <i class="iconfont icon-soushuo1"></i>
        <input type="text" placeholder="请输入城市或者拼音" />
      </div>
      <div class="content" v-for="(item,index) in cityList" :key="index">
        <p  class="p1">{{item.index}}</p>
        <p  class="p2" v-for="(child) in  item.list" :key="child.id">{{child.nm}}</p>
      </div>
      <div class="left9">
        <span v-for="(item,index) in cityList" :key="index">{{item.index}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "City",
  created() {
    this.$store.dispatch("city/handleAsyncGetCity");
  },
  computed: {
    ...mapState({
      cityList: state => state.city.cityList
    })
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
}
.head {
  display: flex;
  height: 0.44rem;
  justify-content: center;
  align-items: center;
  font-size: 0.18rem;
  position: relative;
  border-bottom: 1px solid #333;
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  color: #fff;
}
.head i {
  position: absolute;
  left: 20px;
}
.nav {
  display: flex;
  height: 0.44rem;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
}
.nav input {
  width: 3.25rem;
  height: 0.3rem;
  background: #f5f5f5;
  font-size: 0.16rem;
  color: #666;
  border: 0;
  outline: none;
  padding-left: 40px;
  border-radius: 15px;
}
.nav i {
  position: absolute;
  left: 5%;
  top: 11px;
  font-size: 0.16rem;
}
.content {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.content .p1 {
  height: 0.4rem;
  font-size: 0.14rem;
  color: #666;
  background: #f5f5f5;
  display: flex;
  padding-left: 0.2rem;
  align-items: center;
}
.content .p2 {
  height: 0.5rem;
  font-size: 0.14rem;
  color: #333;
  background: #fff;
  display: flex;
  padding-left: 0.2rem;
  align-items: center;
}
.left9 {
  width: 0.2rem;
  height: 4.4rem;
  position: fixed;
  right: 12px;
  top: 1.3rem;
  display: flex;
  flex-direction: column;
}
.left9 span {
  display: block;
  height: 0.2rem;
  text-align: center;
  line-height: 0.2rem;
  font-size: 0.12rem;
  color: #999;
}
</style>
