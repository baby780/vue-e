import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import observer from "./observer";
Vue.prototype.$observer = observer;
import "./mock/index.js"




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
