import {zongApi} from "@api/combo_list/zong.js";

let state ={
     dianList:JSON.parse(sessionStorage.getItem("dianList"))||[],
     dianfan:JSON.parse(sessionStorage.getItem("dianfan"))||[]
}  


let actions={
    async handleGetzongList ({commit},params){
        let data=await zongApi(params);
       
        commit("hanleGetDian",data.query_list)
    }
}

let mutations ={
    hanleGetDian(state,dian){
        let dianList=[],dianfan=[];
         let b=dian.length

        for(var i=0;i<b ;i++){
             dianList.push(dian[i].foods);
             dianfan.push(dian[i].restaurant);
          
           
        }
        sessionStorage.setItem("dianList",JSON.stringify(dianList));
        sessionStorage.setItem("dianfan",JSON.stringify(dianfan))
    }
   
}



export default {
    state,
    actions,
    mutations,
    namespaced: true

}