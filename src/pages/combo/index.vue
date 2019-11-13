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
     <!-- <main>
      <div class="box">
        <div class="top">
          <div class="one">
            <img
              src="https://cube.elemecdn.com/6/fe/e7c9e820aa48a0f4a0ce0ec5c4d13png.png?x-oss-process=image/format,webp/resize,w_80,h_80,m_fixed"
              alt
            />
          </div>
          <div class="two">
            <p>米先生黯然销魂炒饭(沙河店)</p>
            <span>味道超赞</span>
          </div>
          <div class="three">
            <p>
              评分
              <span>4.5</span> | 月售
              <span>3112</span>
            </p>
          </div>
        </div>
        <div class="middle">
          <div class="bos">
            <div class="left">
              <img
                src="https://cube.elemecdn.com/c/cd/dd67053b760b511e8042af5db6932jpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
                alt
              />
            </div>
            <div class="right">
              <p>黯然2号➕里脊➕鸡柳➕腊肠➕烤肠煎蛋果饮</p>
              <p>食材：铁板里脊、鸡柳、腊肠、鸡蛋、玉米、胡萝卜、甘蓝一起翻炒哦！</p>
              <p>
                ￥
                <span>
                  19.9
                  <s>￥42.9</s>
                </span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg=="
                  alt
                />
              </p>
            </div>
          </div>
           
        </div>
        <div class="footer">
          <p>
            展开更多套餐
            <a>2</a>个﹀
          </p>
        </div>
      </div> 
      
       
    </main> -->
  </div>
</template>

<script>
export default {


};
</script>


<style >

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