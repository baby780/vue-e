import Vue from "vue";
import Vuex from "vuex";
import city from "./city"
import dian from "./dian"
Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        city,
        dian
    }
})

