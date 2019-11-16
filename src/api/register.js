import http from "@utils/request";

/* 注册接口 */
export const RegisterApi =(username,password)=>http({
    method:"get",
    url:"/users/register",
    data:{
        username:username,
        password:password
    }
})

/* http://localhost:3000/users/register?username=aaaaaa&password=aaaa*/