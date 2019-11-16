<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
   </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"Alley-scroll",
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            //开启下拉刷新
            pullDownRefresh:true,
            //开启上拉加载更多
            pullUpLoad:true,
            click:true,
            tap:true,
        });
    },
    methods:{
        handlepullingDown(callback){
            this.scroll.on("pullingDown",()=>{
               callback();
            })
        },
        handlefinishPullDown(){
            //通知better-scroll进行一次拉刷新
            this.scroll.finishPullDown();
            //重新计算better-scroll
            this.scroll.refresh();
        }
    }
}
</script>
<style scoped >
    .wrapper{
        height: 100%
    }

</style>
