<template>
    <div class="ha">
      <header > 
        <div class="one">
        <div class="left1">
            头像
        </div>
        <div class="right1">
            <img src="https://cube.elemecdn.com/c/cd/dd67053b760b511e8042af5db6932jpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
            alt="">
            <span>></span>
        </div>
        </div>
        <div class="two">
            <div class="left2">
                用户名
            </div>
            <div class="right2">
                <p>123sdase12ede <span>☘</span></p>
            </div>
        </div>
    </header>
    <div class="nav">
        账号绑定
    </div>
     <div class="ipone">
        <p><span>🔥</span>手机</p>
        <p>123123123123<span>👤</span></p>
    </div>
    <div class="nav">
            安全设置
    </div>
    <div class="anquan">
            <p>登陆密码</p>
            <p>未设置<span>👤</span></p>
    </div>
    <div class="footerr">
        退出登录
    </div>
    </div>
</template>

<script>


export default {
    name:"asd",

   
}
</script>


<style scoped>
.ha{
     height:100%;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
}
    header{
    font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
    width:100%;
    height:1.3rem;
    display: flex;
    background: #fff;
    font-size: 0.16rem;
    flex-direction: column;
}
header .one{ 
    width:100%;
    height: 0.8rem;
    display: flex; 
    padding:0.1rem 0.14rem 0.1rem 0.14rem;
    justify-content: space-between;
    align-items: center;
}
header .one .left1{
    width:0.35rem;
    height:0.19rem;
    font-size: 0.16rem;;
    color: #333;
    font-weight: bold;
}
header .one .right1{
    width:0.78rem;
    height:0.6rem;
    display: flex;
    align-items: center
}
header .one .right1 img{
    height:100%;
    border-radius:30px; 
}
header .one .right1 span{
    font-size: 0.2rem;
    margin-left: 5px;
}
header .two {
    width: 100%;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0.14rem;
    font-size: 0.16rem;
}
header .two .left2{
    font-weight: bold;
    color: #333;
}
header .two .right2{
    color: #666;
}
.nav{
    width:100%;
    height:0.144rem;
    color: #999;
    font-size: 0.12rem;
    margin: 0.16rem 0 0.07rem 0.14rem;

}
.ipone,.anquan{
   
    height:0.5rem;
    padding: 0.14rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.16rem;
    font-weight: bold;
}
.ipone p:nth-child(2){
    font-weight: normal;  
}
.anquan{
    font-weight: normal;  
    color: #333;  
}
.anquan p:nth-child(2){
    color: #0097ff;
}
.footerr{
    width:100%;
    height: 0.5rem;
    color: #ff5339;
    margin: 0.2rem 0;
    padding: 0.14rem 0;
    font-size: 0.16rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

</style>