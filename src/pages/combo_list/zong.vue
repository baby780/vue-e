<template>
  <Alley-scroll ref="scroll">
    <div class="main">
      <div class="box" v-for="(item,index) in zongList" :key="index" >
        <router-link tag="div" class="top" :to="'/details/'+item.restaurant.id">
          <div class="one" >
            <img :src="img[index]"/>
              <!-- :src="'https://cube.elemecdn.com/'+((item.foods[0].image_path).replace('a9','/a9/'))+'.jpeg?x-oss-process=image/format,webp/resize,w_90'" -->
          </div>
          <div class="two">
            <p>{{item.foods[0].restaurant_name}}</p>
            <span>味道超赞</span>
          </div>
          <div class="three">
            <p>
              评分
              <span>4.5</span> | 月售
              <span>3112</span>
            </p>
          </div>
        </router-link>
        <router-link
          tag="div"
         :to="'/details/'+item.restaurant.id"
          class="middle"
          v-for="(childer,i) in item.foods"
          :key="i"
        >
          <div class="bos">
            <div class="left">
              <img :src="aaa[index*i]"/>
            </div>
            <div class="right">
              <p>{{childer.name}}</p>
              <p>{{childer.description}}</p>
              <p>
                ￥
                <span>
                  {{childer.price}}
                  <s>￥{{childer.original_price}}</s>
                </span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg=="
                  alt
                />
              </p>
            </div>
          </div>
        </router-link>
        <div class="footer">
          <p @click="handleevent()">
            展开更多套餐
            <a>{{item.foods.length}}</a>个﹀
          </p>
        </div>
      </div>
    </div>
  </Alley-scroll>
</template>

<script>
import { zongApi } from "@api/combo_list/zong";

export default {
  name: "zong",
  data() {
    return {
      zongList: [],
      str: [],
      sss:[],
      aaa:[],



      dian:[],
      dianimg:[],
      img:[]
    };
  },
  watch:{
      zongList(){
         this.$refs.scroll.handlefinishPullDown();
      }
  },
  created() {
    this.handleGetzongList(116.250586);
  },
  methods: {
    async handleGetzongList(longitude) {
      let data = await zongApi(longitude);
    
      this.zongList = data.query_list;
     /*  console.log(this.zongList); */
      let g = this.zongList.length;
      for (let i = 0; i < g; i++) {
        for (let j = 0; j < this.zongList[i].foods.length; j++) {
          this.str.push(this.zongList[i].foods[j].image_path);
        }
      }
      
      for(let i=0;i<this.str.length;i++){
          this.sss.push(this.str[i].split(""));
         
      }
      for(let a=0;a<this.sss.length;a++){
         this.sss[a].splice(1,0,"/");
          this.sss[a].splice(4,0,"/");
      }
      
      for(let i=0;i<this.sss.length;i++){
          this.aaa.push(('https://cube.elemecdn.com/')+(this.sss[i].join(""))+('.jpeg?x-oss-process=image/format,webp/resize,w_90'));
          
        
      }

      for(let i =0;i<g;i++){
            this.dian.push(this.zongList[i].restaurant.image_path);
      }
      for(let a=0;a<this.dian.length;a++){
        this.dianimg.push(this.dian[a].split(""));
        this.dianimg[a].splice(1,0,"/");
        this.dianimg[a].splice(4,0,"/");
      }
      for(let j=0;j<this.dianimg.length;j++){
        this.img.push(('https://cube.elemecdn.com/')+(this.dianimg[j].join(""))+('.jpeg?x-oss-process=image/format,webp/resize,w_90'))
      }
     
      //console.log('https://cube.elemecdn.com/'+this.sss[1].join("")+'.jpeg?x-oss-process=image/format,webp/resize,w_90')
     /*  console.log(this.zongList); */
     
  
    
    // this.str.push(this.zongList[0].foods[0].image_path)
    //   this.sss=this.str[0].split("");
    //   this.sss.splice(1,0,"/");
    //   this.sss.splice(4,0,"/");
    //   this.aaa.push(this.sss.join(""));
    
    },
    
   //
  //  https://cube.elemecdn.com/4/ce/1c227961b57cf5b989d6b8f052cd0jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90

    handleevent() {}
  },
  mounted(){
     this.$refs.scroll.handlepullingDown(()=>{
          this.handleGetzongList(116.250586);
     });
  }
  

};

// export default {
//     created(){
//       this.$store.dispatch("dian/handleGetzongList",116.250585);
//     },
//     mounted(){
//       new BScroll(this.$refs.Body)
//     }

// }
</script>
<style scoped >

.box {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 2.41rem;
  padding: 0 0.12rem 0.12rem;
  font-size: 0.12rem;
}
.box .top {
  width: 100%;
  height: 0.62rem;
  display: flex;
  padding: 0.12rem 0 0.1rem;
}
.box .top .one {
  width: 0.7rem;
  height: 100%;
  margin-right: 0.08rem;
}
.box .top .one img {
  width: 100%;
  height: 100%;
}
.box .top .two {
  width: 2.1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.box .top .two p {
  width: 100%;
  height: 0.19rem;
  color: #666;
  font-size: 0.15rem;
}
.box .top .two span {
  width: 0.54rem;
  height: 0.17rem;
  color: #a45b1c;
  font-size: 0.11rem;
  margin: 0 0.06rem 0 0;
  padding: 0 0.03rem;
  border: 1px solid #a45b1c;
  text-align: center;
  line-height: 0.17rem;
}
.box .top .three {
  width: 0.93rem;
  height: 0.12rem;
  font-size: 0.1rem;
  color: #aaa;
  white-space: nowrap;
  margin-top: 2px;
}
.middle {
  width: 100%;
  min-height: 1.29rem;
}
.middle .bos {
  width: 100%;
  height: 1.29rem;
  padding: 0.1rem 0;
  display: flex;
}
.middle .bos .left {
  width: 1.09rem;
  height: 1.09rem;
}
.middle .bos .left img {
  width: 100%;
  height: 100%;
}
.middle .bos .right {
  width: 2.32rem;
  height: 1.09rem;
  margin-left: 0.1rem;
  font-size: 0.12rem;
  color: #333;
  position: relative;
}
.middle .bos .right p:nth-child(1) {
  width: 100%;
  font-size: 0.17rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
}
.middle .bos .right p:nth-child(2) {
  width: 100%;
  height: 0.3rem;
  color: #999;
  font-size: 0.11rem;
  margin-top: 0.05rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.middle .bos .right p:nth-child(3) {
  width: 100%;
  height: 0.24rem;
  display: flex;
  font-size: 0.14rem;
  position: absolute;
  bottom: 0;
  align-items: center;
  font-weight: 600;
  font-family: CSD;
}
.middle .bos .right p:nth-child(3) {
  color: #b91f20;
}
.middle .bos .right p:nth-child(3) span {
  font-size: 0.2rem;
}
.middle .bos .right p:nth-child(3) span s {
  font-size: 0.09rem;
  color: #666;
  font-weight: 300;
  font-family: none;
}
.middle .bos .right p:nth-child(3) img {
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
  right: 0;
}
/*  .middle .bos .right p:nth-child(3)  s{
    border: 1px solid #666;
} */
.footerq {
  width: 100%;
  height: 0.37rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.13rem;
  color: #999;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue;
}
</style>

