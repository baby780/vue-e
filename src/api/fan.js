import http from "@utils/request";

export const fanApi =(longitude)=>http({
  method:"get",
  url:"/restapi/shopping/v1/find/recommendation?latitude=40.115708",
  data:{
     
    longitude:longitude
  }

})
//https://h5.ele.me/restapi/shopping/v1/find/recommendation?latitude=40.115708&longitude=116.251534&offset=0&limit=6&user_id=1000029935165