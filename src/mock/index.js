/* const Mock =require("mockjs"); */

import Mock from "mockjs";
const url =require("url");

const data=Mock.mock({
    "data|20":[
        {
            "id|+1": 1,
            "d_img":"https://cube.elemecdn.com/f/7b/ae9401ffb0acade58176e723ccb15png.png?x-oss-process=image/format,webp/resize,w_150",
            "b_img":"https://cube.elemecdn.com/b/e8/fd4d8543d73d25b9fc672ce25bde2png.png?x-oss-process=image/format,webp/resize,w_750",
            "d_name":"麦当劳麦乐送（北京沙河店）",
           

        }
    ]
})


/* 
    参数1：请求的地址 注意是正则表达式
    参数2:请求的方式
    参数3:回调

*/
Mock.mock(/\/list/,"get",(options)=>{
    const{page,limit}=url.parse(options.url,true).query;

    var obj={
        code:200,
        errMsg:"",
        data:{
            list:[]
        }
    }
    for(var i=(page-1)*limit;i<Math.min(page*limit,data.data.length);i++){
                obj.data.list.push(data.data[i]);
            }
            return obj;
})

