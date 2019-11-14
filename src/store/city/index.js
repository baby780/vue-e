import { cityApi } from "@api/city";

let state = {
 
  cityList:JSON.parse(sessionStorage.getItem("cityList")) || [],
  cityId:1,
  nm:"全国"

}

let actions = {
  async handleAsyncGetCity({ commit }) {
    let data = await cityApi();
    commit("handleGetCity", data.data.cities);

  }
}

let mutations = {
  handleGetCity(state, cities) {

  let  cityList = [];
    let a = cities.length;
  
    //城市列表
    for (let i = 0; i < a; i++) {
      let letterFirst = cities[i].py.slice(0, 1).toUpperCase();
      if (isCityList(letterFirst)) {
        //不存在
        cityList.push({ index: letterFirst, list: [{ id: cities[i].id, nm: cities[i].nm }] })
      } else {
        for (let j = 0; j < cityList.length; j++) {
          if (cityList[j].index == letterFirst) {
            cityList[j].list.push({ id: cities[i].id, nm: cities[i].nm });
            break;
          }
        }
      }
    }

    //判断城市标识是否在cityList中

    function isCityList(letterFirst) {
      let bStop = true;
      for (let i = 0; i < cityList.length; i++) {
        if (cityList[i].index == letterFirst) {
          bStop = false;
          break;
        }
      }
      return bStop;
    }
  

    cityList.sort((a, b) => {
      if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    })
    
    state.cityList = cityList;

    sessionStorage.setItem("cityList", JSON.stringify(cityList));
   
    console.log(cityList);
    /* 
      hotCity=[
        {
          id:"",
          mn:""
        }
      ]
    
    */
    // /* 热门城市 */
    // for (var i = 0; i < cities.length; i++) {
    //   if (cities[i].isHot) {
    //     hotCity.push({ id: cities[i].id, nm: cities[i].nm });
    //   }
    // }

    // /* 城市列表 */
    // /* 
    //   cityList=[
    //     {
    //       index:A,
    //       list[{id:"",nm:""}]
    //     },
    //     {
    //       index:B,
    //       list[{id:"",nm:""}]
    //     }
    //   ]
    // */


    // for (var i = 0; i < cities.length; i++) {
    //   let letterFirst = cities[i].py.slice(0, 1).toUpperCase();

    //   // if(isCityList(letterFirst)){
    //   //   cityList.push({index:letterFirst,list:[{id:cities[i].id,nm:cities[i].nm}]})
    //   // }
    // }

    // //判断城市标识是否在cityList中
    // function isCityList(letterFirst) {
    //   var bStop = true;
    //   for (i = 0; i < cityList.length; i++) {
    //     if (cityList[i].index = letterFirst) {
    //       bStop = false;
    //       break;
    //     }
    //   }
    //   return bStop;
    // }
    // console.log(cityList); 
  }
}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}