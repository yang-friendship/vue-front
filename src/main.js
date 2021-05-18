import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    }
)