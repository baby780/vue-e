<template>
  <div class="combo">
    <header>
      <li class="li">全部类别</li>
      <li>简餐便当</li>
      <li>传统美食</li>
      <li>西施套餐</li>
      <li>港粤风味</li>
      <li>日韩料理</li>
    </header>
  </div>
</template>

<script>
export default {


};
</script>


<style scoped  >

html{
    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Droid Sans,Helvetica Neue;
}
body{
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
header{

    width:100%;
    height:0.4rem;
    padding:  0 0.06rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
}
header::-webkit-scrollbar {
    display: none;
}
header li{
    height:0.22rem;
    color: #999;
    font-size: 0.15rem;
    margin-right:0.15rem;
    padding-bottom: 3px;

}
header .li{
    font-weight: 700;
    color: #333;
    border-bottom: 2px solid #333;
}
main{
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-y: auto;
}
main .box{
    display: flex;
    flex-direction: column;
    width:100%;
    min-height:2.41rem;
    padding: 0 0.12rem 0.12rem;
    font-size: 0.12rem;
   
}
main .box .top{
    width:100%;
    height:0.62rem;
    display: flex;
    padding: 0.12rem 0 0.1rem;
}
main .box .top .one{
    width: 0.4rem;
    height:100%;
    margin-right: 0.08rem;
}
main .box .top .one img{
    width:100%;
    height: 100%;
}
main .box .top .two{
    width:2.1rem;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
main .box .top .two p{
    width: 100%;
    height:0.19rem;
    color: #666;
    font-size: 0.15rem;
}
main .box .top .two span{
    width:0.54rem;
    height:0.17rem;
    color: #a45b1c;
    font-size: 0.11rem;
    margin:0 0.06rem 0 0 ;
    padding: 0 0.03rem;
    border: 1px solid #a45b1c;
    text-align: center;
    line-height: 0.17rem;
}
main .box .top .three{
    width:0.93rem;
    height:0.12rem;
    font-size: 0.1rem;
    color: #aaa;
    white-space: nowrap;
    margin-top:2px;
}
main .middle{
    width:100%;
    min-height: 1.29rem;
}
main .middle .bos{
    width:100%;
    height:1.29rem;
    padding: 0.1rem 0 ;
    display: flex;
}
main .middle .bos .left{
    width:1.09rem;
    height: 1.09rem;
}
main .middle .bos .left img{
    width:100%;
    height:100%;
} 
main .middle .bos .right{
    width:2.32rem;
    height:1.09rem;
    margin-left: 0.1rem;
    font-size: 0.12rem;
    color: #333;
    position: relative;
}
main .middle .bos .right p:nth-child(1){
    width:100%;
    font-size: 0.17rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
}
main .middle .bos .right p:nth-child(2){
    width: 100%;
    height:0.3rem;
    color: #999;
    font-size: 0.13rem;
    margin-top:0.05rem;
}
main .middle .bos .right p:nth-child(3){
    width:100%;
    height: 0.24rem;
    display: flex;
    font-size: 0.14rem;
    position: absolute;
    bottom: 0;
    align-items: center;
    font-weight: 600;
    font-family: CSD;
}
main .middle .bos .right p:nth-child(3) {
  color: #b91f20;
 
}
main .middle .bos .right p:nth-child(3)  span{
    font-size: 0.2rem;
}
main .middle .bos .right p:nth-child(3)  span s{
    font-size: 0.09rem;
    color: #666;
    font-weight: 300;
    font-family: none;
}
main .middle .bos .right p:nth-child(3)  img{
    width:0.2rem;
    height:0.2rem;
    position: absolute;
    right: 0;
}
/* main .middle .bos .right p:nth-child(3)  s{
    border: 1px solid #666;
} */
main .footer{
    width:100%;
    height:0.37rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.13rem;
    color: #999;
    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Droid Sans,Helvetica Neue;
}
</style>