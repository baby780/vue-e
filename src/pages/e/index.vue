<template>
  <div class="e">
    <div class="content">
     
      <!-- 导航 -->
      <!--   <div class="nav">
        <div class="nav_box">
          <a>
            <img
              src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>美食</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>大牌惠吃</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>商超便利</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>水果</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>医药健康</span>
          </a>

          <a>
            <img
              src="https://cube.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>浪漫鲜花</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>跑腿代购</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>汉堡披萨</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>厨房生鲜</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>甜品饮品</span>
          </a>
        </div>
        <div class="paging">
          <div class="zhong" style="display: flex">
            <div class="is-active"></div>
            <div class="is-active1"></div>
          </div>
        </div>
      </div>-->
      <van-swipe  indicator-color="white" class="nav">
        <van-swipe-item class="nav_box">
              <a>
            <img
              src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>美食</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>大牌惠吃</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>商超便利</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>水果</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>医药健康</span>
          </a>

          <a>
            <img
              src="https://cube.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>浪漫鲜花</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>跑腿代购</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>汉堡披萨</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>厨房生鲜</span>
          </a>
          <a>
            <img
              src="https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>甜品饮品</span>
          </a>
        </van-swipe-item>
        <van-swipe-item class="nav_box">
               <a>
            <img
              src="https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>速食简餐</span>
          </a>
               <a>
            <img
              src="https://cube.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>地方小吃</span>
          </a>
               <a>
            <img
              src="https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>大牌惠吃</span>
          </a>
                <a>
            <img
              src="https://cube.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>速食简餐</span>
          </a>
                   <a>
            <img
              src="https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
            />
            <span>甜品饮品</span>
          </a>
        </van-swipe-item>
      </van-swipe>
      <!-- 套餐 -->
      <div class="member">
        <router-link
         class="package"
         tag="div"
         to="/package"
         >
          <div class="right">
            <h3>品质套餐</h3>
            <div class="index-2W67h_0">搭配齐全吃得好</div>
            <div class="index-1DFa7_0">立即抢购 &gt;</div>
          </div>
          <img
            src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed"
          />
        </router-link>
        <!--   会员 -->
        <div class="index-3eoZ-_0">
          <div class="index-3M-d6_0">
            <img
              alt
              class="index-1QvOZ_0"
              src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34"
            />
            <span class="index-M9mXY_0">超级会员·</span>
            <span class="index-tO6Fz_0">每月领20元红包</span>
          </div>
          <a href="javascript:" ubt-click="101933" ubt-data-type="1" class="index-1-R5E_0">
            立即开通
            <i class="iconfont icon-you"></i>
          </a>
        </div>
      </div>
      <!-- 推荐商家 -->
      <div class="title">
        <p>
          <i>-</i>推荐商家
          <i>-</i>
        </p>
      </div>
      <!-- 排序 -->

      <!--    <a>综合排序<i class="iconfont icon-zcopy-copy-copy"></i></a>
            <a>距离最近</a>
            <a>品质联盟</a>
      <a>筛选<i class="iconfont icon-shaixuan"></i></a>-->
      <van-dropdown-menu class="collate">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item v-model="value4" :options="option4" />
      </van-dropdown-menu>

      <!-- 店铺 -->
      <div class="shoplist">
        <li v-for="(item,index) in shopList" :key="index">
          <div class="top">
           <!--  <img
              src="https://cube.elemecdn.com/f/7b/ae9401ffb0acade58176e723ccb15png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
            /> -->
            <div class="top_right">
              <span>
                <a>品牌</a>
                <a>{{item.foods[0].restaurant_name}}</a>
                <a class="iconfont icon-shouji">···</a>
              </span>
              <span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                />
                <a>4.8</a>
                <a>月售{{item.foods[0].month_sales}}单</a>
              </span>
              <span>
                <div>
                  <a>¥0起送</a>
                  <a>|配送费¥9</a>
                </div>
                <div>
                  <a>1.73km |</a>
                  <a>28分钟</a>
                </div>
              </span>
            </div>
          </div>
          <div class="lq">
            <div class="zhong">
              <span>汉堡薯条</span>
            </div>

            <div class="bottom">
              <div class="bottom_left">
                <span>
                  <i>特</i>
                  <i>特价商品9.9元起</i>
                </span>
                <span>
                  <i>折</i>
                  <i>折扣商品2.5折起</i>
                </span>
              </div>
              <p>
                4个活动
                <i class="iconfont icon-zcopy-copy-copy"></i>
              </p>
            </div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
/* 配置套餐跳转 */

/* 轮播图 */
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
/* 筛选 */
import { DropdownMenu, DropdownItem } from "vant";
Vue.use(DropdownMenu).use(DropdownItem);



/* 接口引入 */
import {zongApi} from "@api/combo_list/zong";
  import { format } from 'path';
export default {
  name: "e",
  data() {
    return {
     shopList:[],
      value1: 0,
      value2: "a",
      value3: "b",
      value4: "c",
      option1: [
        { text: "综合排名", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [{ text: "距离最近", value: "a" }],
      option3: [{ text: "品牌联盟", value: "b" }],
      option4: [{ text: "筛选", value: "c" }],
      
    };
  },
  created(){
    this.handleshopList(116.250585)
  },

methods:{
    async handleshopList(shoplist){
      let data =await zongApi(shoplist);
      this.shopList=data.query_list;
    /*   console.log(this.shopList);
      console.log(data); */
    }
  

  
}
 
};
</script>

<style scoped  lang="scss">
/* 头部 */

/* 内容 */
.content {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-bottom: 0.49rem;
  padding-top: 0.955rem;
  overflow-y: auto;
}
/* 导航 */
.nav {
  background: #fff;
  display: flex;
  flex-direction: column;
}
.nav .nav_box {
  /*  display: flex;
    justify-content: space-between;
    flex-wrap: wrap;  */
  background: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.nav .nav_box a,
.nav .nav_box a {
  width: 0.74rem;
  margin-top: 0.11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav .nav_box a img,
.nav .nav_box a img {
  width: 0.452rem;
  height: 0.452rem;
}
.nav .nav_box a span,
.nav .nav_box a span {
  width: 100%;
  height: 0.14rem;
  margin-top: 0.05rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.12rem;
  color: #666;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
}
.paging {
  width: 100%;
  height: 0.1rem;
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.paging .is-active {
  height: 0.04rem;
  width: 0.145rem;
  background: #fe7100;
  border-radius: 0.03rem;
}
.paging .is-active1 {
  height: 0.04rem;
  width: 0.145rem;
  background: #ccc;
  border-radius: 0.03rem;
  margin-left: 0.04rem;
}
/* 套餐 会员 */
.member {
  -width: 100%;
  height: 1.53rem;
  display: flex;
  flex-direction: column;
  padding: 0 0.1rem;
}
.member .package {
  -width: 3.55rem;
  height: 1.1rem;
  background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
  padding: 0.12rem 0 0 0.15rem;
  display: flex;
  border-radius: 0.03rem;
}
.member .package .right {
  width: 2rem;
  height: 0.915rem;
  display: flex;
  flex-direction: column;
}
.member .package img {
  width: 1.555rem;
  height: 0.915rem;
}
.member .package .right h3 {
  font-size: 0.18rem;
  font-weight: 700;
  margin-bottom: 0.08rem;
  color: #333;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
}
.member .package .right .index-2W67h_0 {
  font-size: 0.125rem;
  color: #777;
  margin-bottom: 0.12rem;
}
.member .package .right .index-1DFa7_0 {
  font-size: 0.16rem;
  color: #af8260;
  font-weight: 700;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
}
.member .index-3eoZ-_0 {
  -width: 100%;
  height: 0.43rem;
  background-image: linear-gradient(90deg, #ffefc4, #f3dda0);
  display: flex;
  align-items: center;
  padding-left: 0.245rem;
  padding-right: 0.165rem;
  border-radius: 0.03rem;
  margin-top: 0.05rem;
}
.member .index-3eoZ-_0 .index-3M-d6_0 {
  display: flex;
  align-items: center;
  width: 2.5rem;
}

.member .index-3eoZ-_0 .index-3M-d6_0 img {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.1rem;
}

.member .index-3eoZ-_0 .index-3M-d6_0 .index-M9mXY_0 {
  font-size: 0.18rem;
  font-weight: 700;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  color: #644f1b;
}
.member .index-3eoZ-_0 .index-3M-d6_0 .index-tO6Fz_0 {
  font-size: 0.12rem;
  line-height: 0.26rem;
}
.member .index-3eoZ-_0 .index-1-R5E_0 {
  height: 0.43rem;
  font-size: 0.12rem;
  line-height: 0.43rem;
  display: flex;
  color: #644f1b;
}
.member .index-3eoZ-_0 .index-1-R5E_0 .icon-you {
  font-size: 0.1rem;
  color: #644f1b;
}
/* 推荐商家 */
.title {
  -width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.title p {
  font-size: 0.15rem;
  color: #000;
}
.title p i {
  margin: 0 0.1rem;
  color: #999;
}
/* 排序 */
.collate {
  height: 0.395rem;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
}
.collate a {
  width: 0.98rem;
  height: 0.395rem;
  line-height: 0.395rem;
  font-size: 0.14rem;
  color: #666;
  text-align: center;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
}
.icon-zcopy-copy-copy {
  color: #333;
  font-size: 0.02rem;
}
.icon-shaixuan {
  color: #333;
  font-size: 0.13rem;
}

/* 店铺 */
.shoplist {
  display: flex;
  flex-direction: column;
  -background: red;
}

.shoplist li {
  height: 1.3rem;
  background: #fff;
  padding: 0.15rem 0;
  border-bottom: 0.133333vw solid #eee;
}
.shoplist li .top {
  height: 0.65rem;
  background: #fff;
  padding: 0 0.05rem;
  display: flex;
}
.shoplist li .top img {
  width: 0.65rem;
  height: 0.65rem;
}
.shoplist li .top .top_right {
  width: 2.78rem;
  height: 0.65rem;
  display: flex;
  flex-direction: column;
  padding-left: 0.03rem;
  justify-content: space-around;
}
.shoplist li .top .top_right span {
  width: 2.9rem;
  height: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.shoplist li .top .top_right span:nth-child(1) a:nth-child(1) {
  width: 0.27rem;
  height: 0.16rem;
  background-image: linear-gradient(-139deg, #fff100, #ffe339);
  color: #6f3f15;
  font-weight: 700;
  font-size: 0.1rem;
  text-align: center;
  line-height: 0.16rem;
}
.shoplist li .top .top_right span:nth-child(1) a:nth-child(2) {
  width: 2.3rem;
  height: 0.16rem;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  font-size: 0.13rem;
  line-height: 0.16rem;
  color: #333;
  font-weight: 700;
}
.shoplist li .top .top_right span:nth-child(1) a:nth-child(3) {
  font-size: 0.1rem;
  color: #666;
}
.shoplist li .top .top_right span:nth-child(2) img {
  height: 0.1rem;
  width: 0.46rem;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
}
.shoplist li .top .top_right span:nth-child(2) {
  display: flex;
  justify-content: flex-start;
}
.shoplist li .top .top_right span:nth-child(2) a {
  margin: 0.01rem;
  font-size: 0.1rem;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  color: #666666;
}
.shoplist li .top .top_right span:nth-child(3) div {
  width: 2rem;
  height: 0.16rem;
  display: flex;
  align-content: center;
}
.shoplist li .top .top_right span:nth-child(3) div:nth-child(2) {
  width: 0.7rem;
  height: 0.16rem;
  display: flex;
  justify-content: flex-end;
}
.shoplist li .top .top_right span:nth-child(3) div a {
  font-size: 0.1rem;
  color: #666;
  line-height: 0.16rem;
}
.shoplist li .lq {
  height: 0.67rem;
  background: #fff;
  padding-left: 0.77rem;
  display: flex;
  flex-direction: column;
}
.shoplist li .lq .zhong {
  height: 0.13rem;
  background: #fff;
  display: flex;
}
.shoplist li .lq .zhong span {
  width: 0.47rem;
  height: 0.13rem;
  border: 0.01rem solid #ccc;
  font-size: 0.1rem;
  color: #666;
  text-align: center;
}

.shoplist li .lq .bottom {
  height: 0.52rem;
  background: #fff;
  display: flex;
  margin-top: 0.02rem;
}
.shoplist li .lq .bottom .bottom_left {
  height: 0.52rem;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.shoplist li .lq .bottom .bottom_left span {
  width: 2rem;
  height: 0.25rem;
  font-size: 0.1rem;
  background: #ffffff;
  line-height: 0.25rem;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
}
.shoplist li .lq .bottom .bottom_left span i {
  color: #666;
}
.shoplist li .lq .bottom .bottom_left span:nth-child(1) i:nth-child(1) {
  background-color: rgb(241, 136, 79);
  color: #ffffff;
  font-size: 0.1rem;
}
.shoplist li .lq .bottom .bottom_left span:nth-child(2) i:nth-child(1) {
  background-color: rgb(240, 115, 115);
  color: #ffffff;
  font-size: 0.1rem;
}
.shoplist li .lq .bottom p {
  display: flex;
  font-size: 0.1rem;
  margin-left: 0.25rem;
  color: #666;
}
.shoplist li .lq .bottom p i {
  color: #666;
  font-size: 0.01rem;
  margin-top: 0.01rem;
}
</style>
