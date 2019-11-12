import http from "@utils/request";

export const  shouyeApi =(longitude)=>http({
    method:"get",
    url:"/restapi/shopping/v3/restaurants",
    data:{
        longitude:longitude
    }

})

/* https://h5.ele.me/restapi/shopping/v3/restaurants? */
/* latitude=37.880845&longitude=112.549398&offset=0 */
/* https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=40.117667&longitude=116.250585&offset=0& */
/* limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5 */
