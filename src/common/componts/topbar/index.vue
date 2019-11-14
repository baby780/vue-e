<template>
 
    <div id="top">
      <router-link 
      tag="li" 
      v-for="item in topbarname" 
      :key="item.id" :to="item.path"
      
      >{{item.text}}</router-link>
    </div>
 
</template>

<script>
export default {
  name: "topbar",
  data() {
    return {
      topbarname: [
        {
          id: 0,
          text: "全部类别",
          path: "/package/zong"
        },
        {
          id: 1,
          text: "简餐便当",
          path: "/package/jian"
        },
        {
          id: 2,
          text: "传统美食",
          path: "/package/chuan"
        },
        {
          id: 3,
          text: "西施套餐",
          path: "/package/xi"
        },
        {
          id: 4,
          text: "港粤风味",
          path: "/package/gang"
        },
        {
          id: 5,
          text: "日韩料理",
          path: "/package/ri"
        }
      ]
    };
  }
};
</script>

<style  scope>

#top {
  width: 100%;
  height: 0.4rem;
  padding: 0 0.06rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  position: fixed;
  top:0;
  z-index: 5;
  background: #fff;
}
#top::-webkit-scrollbar {
  display: none;
}
#top li {
  height: 0.22rem;
  color: #999;
  font-size: 0.15rem;
  margin-right: 0.15rem;
  padding-bottom: 3px;
  font-family: Arial;
}
#top .router-link-active {
  font-weight: 700;
  color: #333;
  border-bottom: 2px solid #333;
}
</style>