import Vue from "vue";
import Vuex from "vuex";
import counter from "@/store/counter/index";
import github from "@/store/github/index";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    github,
    counter
  }
});
