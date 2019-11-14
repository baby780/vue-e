<template>
  <div class="order">
    <div class="content3">
      <div class="content_box">
        <img src="http://fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png" />
        <p>近三个月无外卖订单记录</p>
        <p>
          查看三个月前的外卖订单
          <i class="iconfont icon-zcopy-copy-copy"></i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "order"
};
</script>


<style lang="scss" scoped>
.order{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: #F5F5F5;
}

 .content_box{
    height: 4rem;
    display: flex;
    flex-direction: column;
    margin-top: 35%;
    align-items: center;
}
 .content_box p:nth-child(2){
    color: #6a6a6a;
    font-weight: 400;
    font-size: 0.15rem;
    margin-top: 3%;
}
 .content_box p:nth-child(3){
    color: #6a6a6a;
    margin-top: 3%;
    font-size: 0.1rem;
}
 .content_box img{ 
    height: 1.5rem;
    width: 1.9rem;
}
</style>
