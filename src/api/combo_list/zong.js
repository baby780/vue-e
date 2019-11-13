import http from "@utils/request";

export const zongApi =(longitude)=>http({
  method:"get",
  url:"/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=40.117667",
  data:{
     
    longitude:longitude
  }

})




//restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=40.117667&longitude=116.250585&params=%7B%22user_id%22%3A546294874%7D
//restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=40.117667&longitude=116.250585&params=%7B%22user_id%22%3A546294874%7D

//https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=40.117667&longitude=116.250585&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5