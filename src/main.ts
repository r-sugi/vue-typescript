import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueCookies from "vue-cookies";
import VueCompositionApi from "@vue/composition-api";
import { globalStore } from "@/store/global";
Vue.use(VueCompositionApi);
Vue.use(VueCookies);

Vue.config.productionTip = false;

Vue.prototype.$store = globalStore();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
