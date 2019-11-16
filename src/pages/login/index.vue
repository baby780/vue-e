<template>
  <div class="login">
    <form v-if="!isReg">
      <div>用户名:</div>
      <input type="text" ref="username" />
      <div>密码:</div>
      <input type="password" ref="password" />
      <button type="button" @click="login()">登录</button>
      <button type="button" @click="reg()">注册</button>
    </form>
    <form v-else>
      <div>用户名:</div>
      <input type="text" ref="name" />
      <div>密码:</div>
      <input type="password" ref="password" />
      <div>再次输入密码:</div>
      <input type="password" ref="repeat" />
      <button type="button" @click="addUser()">确定</button>
      <button type="button" @click="cancel()">取消</button>
    </form>
  </div>
</template>
 
<script>
import { LoginApi } from "@api/login.js";
import {RegisterApi} from "@api/register.js"
export default {
  name: "login",
  data() {
    return {
      isReg: false,
      username: "",
      password: "",
      repeat: "",
      name:""
    };
  },
  methods: {
     async login(username,password){
        this.username=this.$refs.username.value;
        this.password=this.$refs.password.value;
        let data =await LoginApi(this.username,this.password)
        if(data.data.info=="登录成功"){
          this.$router.push({
            path:"/mine",
            query:{
              username:this.username
            }
          });
        }else{
          alert("密码不正确")
        }
    },
    

    async  reg() {
      this.isReg = true;
     
    },
    cancel() {
      this.isReg = false;
    },
    async addUser(name,password,repeat) {
      this.isReg = false;
      this.name=this.$refs.name.value;
      this.password=this.$refs.password.value;
      this.repeat=this.$refs.repeat.value;
      if(this.password===this.repeat){
          let data= await RegisterApi(this.name,this.password);
          if(data.data.info=="注册成功"){
            alert("注册成功");
          }else{
            alert("用户名重复")
          }
      }else{
        alert("两次密码不一致")
      }
    }
  }
};
</script>
 
<style scoped>
  .login{
    font-size: 0.14rem;
  }
</style>
 
