<template>
  <div class="header">
    <div class="location">
      <p class="iconfont icon-dingwei" @click="handleToggle()">{{this.$route.params.city}}</p>
      <span class="iconfont icon-zcopy-copy-copy"></span>
    </div>
    <div class="search">
      <a>
        <span class="iconfont icon-sousuo">搜索饿了么商家、商品名称</span>
      </a>
    </div>
  </div>
</template>
<script>

export default {
  name: "Header",
  

  data(){
    return {
      isShow:true
    };
  },
  methods:{
    handleToggle(){
    /*   this.isShow=!this.isShow; */
      this.$observer.$emit("hanless",this.isShow)
    /*   console.log(this.isShow); */
    }
  }

};
</script>
<style scope lang="scss">
/* 头部 */
.header{
    height: 0.955rem;
    background-image: linear-gradient(45deg,#0085ff,#0af);
    position: sticky;
    top: 0;  
    display:flex;
    flex-direction: column;
    z-index: 10;
   
}
.location{
    -width: 100%;
    height: 0.445rem;   
    -background: red; 
    padding: 0.1rem  0.14rem 0  0.14rem;
    display: flex;
    align-items: center;
}
.location p{
    font-size: 0.17rem;
    color: #fff;
    font-weight: 700;
    width: 1.665rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
   
}
 .location .icon-zcopy-copy-copy {
    font-size: 0.035rem;
    color:#fff;
}
.search{
    display: flex;
    -width:100%;
    height: 0.51rem;
    padding: 0.075rem 0.14rem;
   
    align-items: center;
    justify-content: space-around;
   
}
.search .icon-sousuo{
    width: 3.5rem;
    height: 0.36rem;
    background: #fff;
    border-radius: 0.03rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.14rem;
}
</style>