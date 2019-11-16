<template>
  <div class="mine">
      <div v-if="$route.meta.flagw">
    <router-link to="/mine/personal" tag="header" >
      <div class="left1">
        <img src alt />
      </div>
      <div class="middle">
        <router-link 
          tag="p"
          to="/login"
        >{{this.username}}</router-link>
        <p>
          <span></span>
        </p>
      </div>
      <div class="right1">></div>
    </router-link>
    <div class="nav">
      <div class="left2">
        <p>
          <span>0</span>个
        </p>
        <p>红包</p>
      </div>
      <div class="right2">
        <p>
          <span>0</span>个
        </p>
        <p>金币</p>
      </div>
    </div>
    <main>
      <div class="bos">
        <div class="box" v-for="(item,index) in icons " :key="index">
          <span class="iconfont span" v-html="item.icon"></span>
          <p>
            <span>{{item.p}}</span>
            <span class="iconfont span3"   v-html="item.icon2"></span>
          </p>
        </div>
      </div>
      <a href="#" class="end">隐私政策</a>
     <TabBar/>
    </main>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import TabBar from "../../common/components/tabBar"
export default {
  name: "mine",
  components:{
TabBar
  },
  data() {
    return {
      icons: [
        {
          icon: "&#xe605",
          p: "我的地址",
          icon2: "&#xe6a8",
          path:"/"
        },
        {
          icon: "&#xe505",
          p: "金币商城",
          icon2: "&#xe6a8"
        },
        {
          icon: "&#xe6d0",
          p: "分享拿20元现金",
          icon2: "&#xe6a8"
        },
        {
          icon: "&#xe62b",
          p: "我的客服",
          icon2: "&#xe6a8"
        },
        {
          icon: "&#xe503",
          p: "下载饿了吗APP",
          icon2: "&#xe6a8"
        },
        {
          icon: "&#xe667",
          p: "规则中心",
          icon2: "&#xe6a8"
        }
      ],
        username:"",
      
    };
  },
   created(){
    this.hanleLogin();
      
       
    },
    methods:{
      hanleLogin(){
        if(this.$route.query.username==undefined){
         
           this.username="登录/注册"
        }else{
          this.username=this.$route.query.username
        }
       
   
      }
    }
};
</script>


<style lang="scss" scoped>
.mine {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
header {
  height: 1.1rem;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: 0.25rem 0.15rem;
  display: flex;
  align-items: center;
}
header .left1 {
  width: 0.6rem;
  height: 100%;
  display: flex;
  align-items: center;
}
header .left1 img {
  width: 0.6rem;
  height: 0.6rem;
  background: pink;
  border-radius: 0.4rem;
}
header .middle {
  flex: 1;
  font-size: 0.21rem;
  margin-left: 0.18rem;
  display: flex;
  flex-direction: column;
  color: aliceblue;
  justify-content: space-between;
  padding: 0.05rem 0;
}
header .middle p:nth-child(1) {
  font-weight: 700;
}
header .middle p:nth-child(2) {
  font-size: 0.12rem;
}
header .right1 {
  font-size: 0.25rem;
  font-weight: 700;
  color: aliceblue;
}

.nav {
  height: 0.83rem;
  display: flex;
}
.nav .left2 {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav .left2 p:nth-child(1) {
  font-size: 0.12rem;
  color: #ff5f3e;
}
.nav .left2 p:nth-child(1) span {
  font-size: 0.26rem;
  font-weight: 700;
}
.nav .left2 p:nth-child(2) {
  font-size: 0.12rem;
  color: #666;
  margin-top: 0.01rem;
  font-weight: 700;
}
.nav .right2 {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav .right2 p:nth-child(1) {
  font-size: 0.12rem;
  color: #6ac20b;
}
.nav .right2 p:nth-child(1) span {
  font-size: 0.26rem;
  font-weight: 900;
}
.nav .right2 p:nth-child(2) {
  font-size: 0.12rem;
  color: #666;
  margin-top: 0.01rem;
  font-weight: 700;
}
main {
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #f1f1f1;
  position: relative;
}
main .bos {
  display: flex;
  min-height: 1rem;
  flex-direction: column;
  background: #f1f1f1;
}
main .box {
  height: 0.45rem;
  background: #fff;
  display: flex;
  padding-left: 0.25rem;
  align-items: center;
  position: relative;
  font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
}
main .box .span {
  display: block;
  line-height: 0.14rem; 
  text-align: center;
  width: 0.18rem;
  height: 0.17rem;
  color: #0af;
  font-size: 0.21rem;
  position: absolute;
  left: 16px;
  
}
main .box p {
  display: flex;
  font-size: 0.16rem;
  padding: 0.14rem 0.2rem 0.14rem 0;
  color: #333;
  width: 100%;
  justify-content: space-between;
  margin-left: 10px;
  padding-left: 12px;
}
main .box:nth-child(1) {
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
}
main .box:nth-child(3) {
  margin-bottom: 0.15rem;
}
main .end {
  font-size: 0.15rem;
  color: #4da6f0;
  position: absolute;
  top: 350px;
  left: 150px;
}
.span3{
    transform: rotateZ(180deg);
}
</style>
