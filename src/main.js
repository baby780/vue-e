import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import observer from "./observer";
Vue.prototype.$observer = observer;
import "./mock/index.js"
<<<<<<< HEAD
import "./pages/loding/index"
=======
import store from "./store";

>>>>>>> master




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
