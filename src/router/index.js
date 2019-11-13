import Vue from "vue";
import VueRouter from "vue-router";
import zong from "./combo_list_router/zong"
import chuan from "./combo_list_router/chuan"
import gang from "./combo_list_router/gang"
import jian from "./combo_list_router/jian"
import ri from "./combo_list_router/ri"
import xi from "./combo_list_router/xi"
Vue.use(VueRouter);


const router = new VueRouter ({ 
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/jian",
            meta:{
                flag:true
            }
        },
        zong,
        chuan,
        gang,
        jian,
        ri,
        xi,
        {
            path:"/details",
            component:_=>import("@pages/details"),
            name:"details",
            meta:{
                flag:false
            }
        }
       
    ]
})

export default router;