import http from "@utils/request";

/* 登录接口 */
export const LoginApi =(username,password)=>http({
    method:"get",
    url:"/users/login",
    data:{
        username:username,
        password:password
    }
})

/* http://localhost:3000/users/login */