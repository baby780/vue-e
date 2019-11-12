import Vue from "vue";
import VueRouter from "vue-router";
import e from "./e";
import find from "./find";
import order from "./order"
Vue.use(VueRouter);
Vue.config.productionTip=false;

const router =new VueRouter({
    mode:"hash",
    routes:[
        {
            //重定向
            path:"/",
            redirect:"/e"
        },
        e,
        find,
        order,
        {
            path:"/mine",
            name:"mine",
            meta:{
                flag:true,
                flag1:false
            },
            component:_=>import("@pages/mine"),
        },
        {
            path:"/login",
            name:"login",
            component:_=>import("@pages/login"),
            meta:{
                flag:false
            }
        }
    ]
})

export default router;