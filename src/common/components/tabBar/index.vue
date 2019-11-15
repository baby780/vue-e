<template>
  <div class="footer">
    <div class="footer_box">
      <router-link v-for="(item,index) in tabbars" :key="index" :to="item.path" tag="div">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.text}}</span>
      </router-link>
      <!--  <div>
            <i class="iconfont icon-faxian"></i>
            <span>发现</span>
        </div>
        <div>
            <i class="iconfont icon-icon--copy"></i>
            <span>订单</span>
        </div>
        <div>
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabars",
  data() {
    return {
      tabbars: [
        {
          text: "首页",
          icon: "&#xe503",
          path: "/e"
        },
        {
          text: "发现",
          icon: "&#xe610",
          path: "/find"
        },
        {
          text: "订单",
          icon: "&#xe504",
          path: "/order"
        },
        {
          text: "我的",
          icon: "&#xe501",
          path: "/mine"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
/* 底部 */
.footer{
  width: 100%;
  height: 0.49rem;
  position: fixed;
 
  left: 0;
  bottom: 0;


}
.footer_box {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
}
.footer_box div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #a7a7a7;
  width: 0.9rem;
}

.footer_box div span {
  font-size: 0.14rem;
}

.footer_box  .router-link-active{
  color: #0089dc;
}
</style>