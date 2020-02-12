import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0 as number | null,
    name: null as string | null
  },
  getters: {
    getName(state, getters) {
      return state.name
    },
    greet(state, getters) {
      return `My name is ${getters.getName.toUpperCase()}` // getters.getName may be null
    }
  },
  mutations: {
    setName(state, payload) {
      state.name = payload // (property) name: string | null
    },
    increment(state) {
      state.count++ // Error オブジェクトはnullである可能性があります
    }
  },
  actions: {
    asyncSetName(ctx, payload) {
      ctx.commit('setName', { name: payload })
      console.log(ctx.state.name)
    },
    asyncIncrement() {

    },
    async countup(ctx) {
      while(true) {
        await (() => new Promise(resolve => {
          setTimeout(resolve, 1000)
        }))()
        ctx.dispatch('increment') // 存在しない Action Type
      }
    }
  },
  modules: {}
});
