/* const Mock =require("mockjs"); */

import Mock from "mockjs";
const url =require("url");

const data=Mock.mock({
    "data":[
        {
            "id": 1,
           "username":"高志山",
           "password":"555555"

        }
    ]
})



/* 
    参数1：请求的地址 注意是正则表达式
    参数2:请求的方式
    参数3:回调

*/

// Mock.mock(/\/list/,"get",(options)=>{
//     const{page,limit}=url.parse(options.url,true).query;

//     var obj={
//         code:200,
//         errMsg:"",
//         data:{
//             list:[]
//         }
//     }
//     for(var i=(page-1)*limit;i<Math.min(page*limit,data.data.length);i++){
//                 obj.data.list.push(data.data[i]);
//             }
//             return obj;
    
// })

// Mock.mock(/\/list/,"get",(options)=>{
//     let {username,password}=options.Body
//         var obj ={
//             code:200,
//             errMsg:"",
//             data:{
//                 list:[]
//             }
//         }
//         obj.data.list.push({username,password})
//         console.log(obj);
//         return obj;
// })
Mock.mock(/\/user\/login/, 'post', (loginByUsername)=>{
    let {username,password}=JSON.parse(loginByUsername.body)
      /*  console.log(data.data[0].username); */
      if(username==data.data[0].username && password==data.data[0].password){
          var obj={
              code:200,
              errMsg:"",
              data:{
                  info:"登录成功",
                  status:1
              }
          }
      }else{
          var obj={
              code:200,
              errMsg:"",
              data:{
                info:"密码错误",
                status:2
              }
          }
      }
      return obj;
})


