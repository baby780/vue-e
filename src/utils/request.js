import axios from "axios";

const server  =axios.create({
    timeout:5000,
    widthCredentials:true
})

//请求拦截器
server.interceptors.request.use((config)=>{
    if(config.method="get"){
        config.params = {...config.data};
    }
    //工作中会用的到
/*     config.header["content-type"]="applicetion/json";
    config.header["token"]=""; */
},(err)=>{
    return Promise.reject(err);//遇到错误胡抛出去
})

//响应式拦截
server.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err);
})

export default server