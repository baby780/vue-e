import Vue from "vue";
import VueRouter from "vue-router";
import zong from "./combo_list_router/zong"
import chuan from "./combo_list_router/chuan"
import gang from "./combo_list_router/gang"
import jian from "./combo_list_router/jian"
import ri from "./combo_list_router/ri"
import xi from "./combo_list_router/xi"
import e from "./e";
import find from "./find";
import order from "./order"
Vue.use(VueRouter);
Vue.config.productionTip=false;

const router = new VueRouter ({ 
    mode:"hash",
    routes:[
        {
            //重定向
            path:"/",
            redirect:"/e"
        },
       
        {
            path:"/details",
            component:_=>import("@pages/details"),
            name:"details",
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
        },
        {
            path:"/package",
            component:_=>import("@pages/package"),
            name:"package",
            meta:{
                flag:false
            },
            children:[
                {
                    path:"/",
                    redirect:"/package/zong"
                },
                zong,
                chuan,
                gang,
                jian,
                ri,
                xi,
            ]
        },
      
    ]

})


export default router;