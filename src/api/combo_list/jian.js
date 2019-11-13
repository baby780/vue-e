import http from "@utils/request";

export const jianApi =(longitude)=>http({
  method:"get",
  url:"/restapi/shopping/v1/sale_list_items?type=quality_meal&latitude=40.117667",
  data:{
     
    longitude:longitude
  }

})

//https://h5.ele.me/restapi/shopping/v1/sale_list_items?type=quality_meal&latitude=40.117667&longitude=116.250585&params=%7B%22user_id%22%3A546294874%2C%22sift_factor%22%3A%222%22%7D&rank_id=365b2f441c08408c81fd7c82a5e51d1b&offset=0&limit=20&terminal=web
