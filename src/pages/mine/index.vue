<template>
  <div class="mine">
      <header>
        <div class="left1">
            <img src="" alt="">
        </div>
        <div class="middle">
            <p>asdqweqewqdsad2d</p>
            <p><span>🥒</span>12312312312</p>
        </div>
        <div class="right1">
            >
        </div>
    </header>
       <div class="nav">
        <div class="left2">
            <p><span>0</span>个</p>
            <p>红包</p>
        </div>
        <div class="right2">
            <p><span>0</span>个</p>
            <p>金币</p>
        </div>
    </div>
    
  </div>
</template>
<script>
export default {
    name:"mine",
}
</script>

<style lang="scss">
      header{
    height:1.1rem;
    background-image:linear-gradient(90deg,#0af,#0085ff);
    padding: 0.25rem 0.15rem;
    display: flex;
    align-items: center;
}
header .left1{
    width:0.6rem;
    height:100%;
}
header .left1 img{
    width:0.6rem;
    height:0.6rem;
    background: pink;
    border-radius: 0.4rem;
}
header .middle{
    flex: 1;
    font-size: 0.21rem;
    margin-left:0.18rem;
    display: flex;
    flex-direction: column;
    color: aliceblue;
    justify-content: space-between;
    padding:0.05rem 0;
}
header .middle p:nth-child(1){
    font-weight: 700;
}
header .middle p:nth-child(2){
    font-size: 0.12rem;
}
header .right1{
   font-size: 0.25rem;
   font-weight: 700;
   color: aliceblue;
}


.nav{
    width:100%;
    height:0.83rem;
    display: flex;
}
.nav .left2{
    width:50%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.nav .left2 p:nth-child(1){
    font-size: 0.12rem;
    color: #ff5f3e;
}
.nav .left2 p:nth-child(1) span{
    font-size: 0.26rem;
    font-weight: 700;
}
.nav .left2 p:nth-child(2){
    font-size: 0.12rem;
    color: #666;
    margin-top:0.01rem;
    font-weight: 700;
}
.nav .right2{
    width:50%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.nav .right2 p:nth-child(1){
    font-size: 0.12rem;
    color: #6ac20b;
}
.nav .right2 p:nth-child(1) span{
    font-size: 0.26rem;
    font-weight: 900;
}
.nav .right2 p:nth-child(2){
    font-size: 0.12rem;
    color: #666;
    margin-top:0.01rem;
    font-weight: 700;
}
</style>
