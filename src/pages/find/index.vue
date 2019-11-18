<template>
  <div class="find">

   <header>
       <a href="#" class="left">
            <div class="one">
                <p>金币商城</p>
                <p>0元好物在这里</p>
            </div>
            <div class="two">
                <img src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp" alt="">
            </div>
        </a>
       <div class="right">
            <a href="#" class="box">
                <div class="l1">
                    <p>推荐有奖</p>
                    <p>20元现金不停拿</p>
                </div>
                <div class="r1">
                    <img src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp" alt="">
                </div>
            </a>
            <a href="#" class="box">
                <div class="l1">
                    <p>周边优惠</p>
                    <p>领取口碑好卷</p>
                </div>
                <div class="r1">
                    <img src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp" alt="">
                </div>
            </a>
       </div>
   </header>
   <main >
       <div class="box2">
            <p><span></span>为你推荐</p>
            <p>你的口味,我都懂</p>
       </div>
       <div class="bos">
            <div class="box3">
                    <div class="box3_img">
                     <img src="https://cube.elemecdn.com/7/2b/de00b707933196548a22a2cc74245jpeg.jpeg?x-oss-process=image/format,webp/resize,w_345,h_345,m_fixed" alt="">
                     <p>你可能感兴趣的美食</p>
                    </div>
                    <div class="box3_center">
                        <p>卤肉奥尔良焖汁饭+...</p>
                        <p>月售<em>225</em>份 好评率<em>94%</em> </p>
                        <p><span>￥<em>20.9</em></span><s>￥46.9</s></p>
                       <div class="box4">
                        <p><span></span>三汁焖饭(生命科学园店)</p>
                       </div>
                    </div>
            </div>
            <div class="box3">
                    <div class="box3_img">
                     <img src="https://cube.elemecdn.com/7/2b/de00b707933196548a22a2cc74245jpeg.jpeg?x-oss-process=image/format,webp/resize,w_345,h_345,m_fixed" alt="">
                     <p>你可能感兴趣的美食</p>
                    </div>
                    <div class="box3_center">
                        <p>卤肉奥尔良焖汁饭+...</p>
                        <p>月售<em>225</em>份 好评率<em>94%</em> </p>
                        <p><span>￥<em>20.9</em></span><s>￥46.9</s></p>
                       <div class="box4">
                        <p><span></span>三汁焖饭(生命科学园店)</p>
                       </div>
                    </div>
            </div>
            <div class="box3">
                    <div class="box3_img">
                     <img src="https://cube.elemecdn.com/7/2b/de00b707933196548a22a2cc74245jpeg.jpeg?x-oss-process=image/format,webp/resize,w_345,h_345,m_fixed" alt="">
                     <p>你可能感兴趣的美食</p>
                    </div>
                    <div class="box3_center">
                        <p>卤肉奥尔良焖汁饭+...</p>
                        <p>月售<em>225</em>份 好评率<em>94%</em> </p>
                        <p><span>￥<em>20.9</em></span><s>￥46.9</s></p>
                       <div class="box4">
                        <p><span></span>三汁焖饭(生命科学园店)</p>
                       </div>
                    </div>
            </div>
   
       </div>
       <div class="box5">
            查看更多 >
       </div>
   </main>
   <footer>
    <div class="box6">
        <p><span></span>限时好礼</p>
        <p>金币换豪礼</p>
    </div>
    <div class="box7">
        <div class="box8">
             <div class="box9">
                <img src="https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp" alt="">
                <span>限时优惠</span>
            </div>
            
            <p>3元品质联盟红包</p>
            <p>90金币<s>￥3</s></p>
        </div>
        <div class="box8">
                <div class="box9">
                   <img src="https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp" alt="">
                   <span>限时优惠</span>
               </div>
               
               <p>3元品质联盟红包</p>
               <p>90金币<s>￥3</s></p>
           </div>
           <div class="box8">
                <div class="box9">
                   <img src="https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp" alt="">
                   <span>限时优惠</span>
               </div>
               
               <p>3元品质联盟红包</p>
               <p>90金币<s>￥3</s></p>
           </div>

    </div>
    <div class="bon">
        查看更多 >
    </div>
   </footer>

  </div>
</template>
<script>
import {fanApi} from "@api/fan.js"
export default {
    name:"find",
    // created(){
    //   this.hanldeGetfind(116.251534);
    // },
    // methods:{
    //   async hanldeGetfind(longitude){
    //     let data=await fanApi(longitude);
    //     console.log(data);
    //   }
    // }
}
</script>

<style scoped  lang="scss">
header{
    width:100%;
    height:1.6rem;
    display: flex;
    margin-bottom: 0.07rem;
    background: #fff;
}
header .left{
    display: block;
    width:50%;
    height:1.6rem;
    padding:0.22rem 0.11rem  0.06rem 0.16rem;
    border-right: 1px solid rgb(237, 237, 237);
    float: left;

}
header .left .one,header .left .two{
    width:50%;
    height:100%;
    float: left;
    position: relative;
}
header .left .one p:nth-child(1){
    width: 100%;
    height:0.192rem;
    color:#f90;
    font-size: 0.16rem;
    margin-bottom: 0.06rem;
}
header .left .one p:nth-child(2){
    width:100%;
    height:0.144rem;
    color: #999;
    font-size: 0.12rem;
}
header .left .two img{
    width:100%;
    position: absolute;
    bottom: 0;
    left:0;
}
header .right{
    width:50%;
    height:100%;
    float: left;
    padding: 0 0.15rem;
    display: flex;
    flex-direction: column;
}

header .right .box{
    width: 100%;
    height:50%;
    display: block;
    display: flex;
   
}
header .right .box .l1{
    width:60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
header .right .box .l1 p:nth-child(1){
    width: 100%;
    height: 0.192rem;
    color: #1ba9e1;
    font-size: 0.16rem;
    margin-bottom: 0.06rem;
}

header .right .box .l1 p:nth-child(2){
    width: 100%;
    height: 0.144rem;
    color: #999;
    font-size: 0.12rem;
}
header .right .box .r1{
    width:40%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end

}
header .right .box .r1 img{
    width:0.45rem;

}
header .right .box:nth-child(2) .l1 p:nth-child(1){
    color:#ed6660;
}


main{
    width:100%;
    min-height:0.6rem;
    background: #fff;
    display: flex;
    flex-direction: column;
}
main .box2 {
    width:100%;
    min-height: 0.4rem;
    
}
main .box2 p:nth-child(1){
    width: 100%;
    height:0.41rem;
    padding-top: 0.2rem;
    font-size: 0.18rem;
    color: #333;
    text-align: center;
    font-weight: bold;

}
main .box2 p:nth-child(2){
    width:100%;
    height:0.21rem;
    padding-bottom: 0.08rem;
    font-size: 0.11rem;
    color: #999;
    text-align: center;
    font-weight: bold;
}

main .bos{
    width:100%;
    min-height:5.58rem;
    display: flex;
    -background: #ed6660;
    padding: 0 0 0.15rem 0.1rem;   
    flex-wrap: wrap;
    align-content: flex-start; 
}
main .bos .box3{
    width: 46.3%;
    height:2.65rem;
    -background:green;
    margin: 0.045rem;
    display: flex;
    flex-direction: column;
}
main .bos .box3 .box3_img{
    width:100%;
    height:1.725rem;
    position: relative;
}
main .bos .box3 .box3_img img {
    width:100%;
    height:100%;
}
main .bos .box3 .box3_img p{
    width:100%;
    height:0.2rem;
    position: absolute;
    bottom:0;
    font-size: 0.1rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    line-height: 0.2rem;
    text-align: center;
}
main .bos .box3 .box3_center {
    width:100%;
    min-height:0.1rem;
    padding:  0.004rem 0.08rem 0 0.1rem;
}
main .bos .box3 .box3_center p:nth-child(1){
    width:100%;
    height:0.18rem;
    font-size: 0.13rem;
    color:#333;
    font-weight: 700;
    white-space: nowrap;
    margin-top:0.03rem;
}
main .bos .box3 .box3_center p:nth-child(2){
    width:100%;
    height:0.12rem;
    margin-top:0.003rem;
    color: #666;
    font-size: 0.1rem;
}
main .bos .box3 .box3_center p:nth-child(3){
    width:100%;
    height:0.22rem;
    padding-bottom:0.003rem;
    font-size: 0.1rem;
    
}
main .bos .box3 .box3_center p:nth-child(3) span{
    color: #f90;
    font-weight: 900;
}
main .bos .box3 .box3_center p:nth-child(3) span em{
    font-size: 0.16rem;
}
main .bos .box3 .box3_center .box4{
    height: 0.33rem;
    border-top:1px dashed #999;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
main .bos .box3 .box3_center .box4 p{
    height: 0.13rem;
    color: #999;
    font-size: 0.11rem;
    margin-left:0.006rem;
}
main .box5{
    width:100%;
    height:0.335rem;
    font-size: 0.13rem;
    color: #999;
    padding-bottom: 0.18rem;
    line-height: 0.335rem;
    text-align: center; 
}
footer{
    margin-top:0.1rem;
    min-height:2rem;
    background: #fff;
    margin-bottom:0.3rem; 
}
footer .box6{
    width:100%;
    min-height:0.5rem;

}
footer .box6 p:nth-child(1){
    width:100%;
    height:0.41rem;
    color: #333;
    font-size: 0.18rem;
    padding-top: 0.2rem;
    font-weight: 700;
    text-align: center;
}
footer .box6 p:nth-child(2){
    width:100%;
    height:0.21rem;
    color: #999;
    font-size: 0.11rem;
    padding-bottom: 0.08rem;
   
    text-align: center;
} 
footer .box7{
    width:100%;
    height:1.94rem;
    display: flex;
    padding: 0.12rem 0 0.15rem 0.15rem;
}
footer .box7 .box8{
    width:33%;
    height:100%;
    display: flex;
    flex-direction: column;
    margin-right: .06rem;

}
footer .box7 .box8 .box9{
    width: 100%;
    position: relative;
}
footer .box7 .box8 .box9 img{
    width:100%;
    height:1.1rem;
    margin-bottom: 0.08rem;
}
footer .box7 .box8 .box9 span{
    display: block;
    position: absolute;
    width:0.49rem;
    height:0.18rem;
    background: #413d3c;
    color: #fff;
    font-size: 0.11rem;
    padding: 0.0025rem;
    top:0;
    left:0;
    line-height: 0.18rem;
    text-align: center;
}
footer .box7 .box8 p:nth-of-type(1){
    width:100%;
    height:0.16rem;
    margin-bottom: 0.01rem;
    font-size: 0.12rem;
    color: #333;
}
footer .box7 .box8 p:nth-of-type(2){
    width:100%;
    height:0.144rem;
    margin-bottom: 0.01rem;
    font-size: 0.13rem;
    color: #ff5339;
    font-weight: bold;
}
footer .box7 .box8 p:nth-of-type(2) s{
    color: #aaa;
    font-size: 0.11rem;
    font-weight: bold;
}
footer .bon{
    width:100%;
    height:0.5rem;
    padding:0.15rem 0 0.18rem 0 ;
    font-size: 0.13rem;
    color:#999;
    text-align: center;
    line-height: 0.23rem;
}















</style>
