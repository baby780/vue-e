<template>
  <div class="loctaion1">
    <transition name="right">
    <div class="loctaion_box" v-if="info" >
        <div class="header1">
        <i class="iconfont icon-fanhui" @click="handleToggle()" ></i>
        <i>选择收获地址</i>
        <i>新增地址</i>
    </div>
    <!-- 搜索 -->
      
    <div class="sreach">
        <li><router-link
            tag="a"
            to="/location"

        >选择城市</router-link><span class="iconfont icon-zcopy-copy-copy"></span></li>
        <li>
            <span class="iconfont icon-sousuo">请输入地址</span>
        </li>
    </div>

  <!--   当前 -->
    <div class="current">
        <span>当前地址</span>
        <span>
            <i>未能获取地址</i>
            <i>重新定位</i>
        </span>
    </div>

    <div class="current">
            <span>收获地址</span>
            <span>
                <i>浩田</i>
                
            </span>
       
    </div>
       <TabBar/>
    </div>
    </transition>
     
  </div>
</template>

<script>
import TabBar from "@common/components/tabBar"
export default {
  name: "Loctaion",
  components:{
      TabBar
  },
    data(){
        return{
            info:"",
        }
    },
    created(){
        this.$observer.$on("hanless",(params)=>{
            this.info=params;
            
        })
    },
    methods:{
        handleToggle(){
           this.info=!this.info;
           
        }
    }
};
</script>
<style scope lang="scss">

/*     .loctaion1{
       position: fixed;
       top: 0;
        left: 0;
        bottom: 0;
        right: 0;
}
 */

 

 
 .loctaion_box{
 /*    width:100%;
    height: 100%;
    position: absolute;
    right: 0;
    top:0;
    z-index: 15 */
    width: 100%;
       height: 100%;
        position: absolute;
        top: 0;
        right: 0;
       background: #f2f2f2;
        z-index: 15

}
  .right-enter,.right-leave-to{
    right:-500%;
}
 .right-enter-active,.right-leave-active{
     transition: all .3s;
}
.loctaion_box .header1{
    height: 0.55rem;
    background-image: linear-gradient(45deg,#0085ff,#0af);
	display:flex;
	justify-content:space-between;
	line-height:0.55rem;
	padding:0 0.145rem;
    position: sticky;
    top: 0;  
    z-index: 30;
   

}
.loctaion_box .header1  i{
    font-size: 0.18rem;
    color: #ffffff;
    font-weight: 700;
   
   

    
}
 .loctaion_box .header1  i:nth-child(1){
    font-size: 0.18rem;
    color: #ffffff;
    width: 0.6rem;

    
}

.loctaion_box .sreach {
    height: 0.56rem;
    display: flex;
    justify-content: space-around;
    background: #ffffff;
}
.loctaion_box .sreach li:nth-child(1){
    width: 0.46rem;
    -background: red;
    height: 0.56rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 0.2rem
  
}
.loctaion_box .sreach li:nth-child(1) a {
    font-size: 0.1rem;
    color: #333;
    font-weight: 700;
    width: 0.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.loctaion_box .sreach li:nth-child(1) .icon-zcopy-copy-copy{
    font-size: 0.01rem;
}
.loctaion_box .sreach li:nth-child(2){
    width: 2.7rem;
    height: 0.36rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.1rem 0.15rem;
}
.loctaion_box .sreach li:nth-child(2) span{
    width: 2.7rem;
    height: 0.36rem;
    line-height: 0.36rem;
    color: #999;
    background: #f2f2f2;
    border-radius: 0.01rem;
}
.loctaion_box .current{
    height: 1rem;
    display: flex;
    flex-direction: column;
}
.loctaion_box .current span:nth-child(1){
    height: 0.2rem;
    background: #f2f2f2;
    font-size: 0.13rem;
    padding: 0.15rem;
}
.loctaion_box .current span:nth-child(2){
    background: #ffffff;
    height: 0.3rem;
    font-size: 0.13rem;
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.loctaion_box .current span:nth-child(2) i:nth-child(1){
   
    height: 0.2rem;
    font-size: 0.18rem;
    color: #333;
    font-weight: 700;
   
}
.loctaion_box .current span:nth-child(2) i:nth-child(2){
    color: #2395ff;
    font-size: 0.13rem;
}

</style>