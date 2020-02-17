import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueCookies from "vue-cookies-ts"
Vue.use(VueCookies)


Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') console.clear();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
