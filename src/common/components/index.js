import Vue from "vue";
import BScroll from "./bscroll"

let componentMap=[
    BScroll,

];


componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})