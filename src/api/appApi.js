import http from "@utils/request";

export const appApi =(longitude)=>http({
  method:"get",
  url:"/restapi/shopping/v3/restaurants?latitude=40.115708",
  data:{
     
    longitude:longitude
  }

})
//https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=40.115708&longitude=116.251534&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5