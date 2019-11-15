import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import observer from "./observer";
Vue.prototype.$observer = observer;
import "./mock/index.js"
import "./pages/loding/index"
import store from "./store"
import "@common/components"



Vue.config.productionTip = false

new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')
