import { Mutations, Actions } from "vuex";
import { S, G, M, A } from "@/store/github/type";

const state: S = {
  users: []
};

const actions: Actions<S, A, G, M> = {
  asyncFetchUsers(ctx, payload) {
    ctx.commit("setUsers", payload);
  }
};

const mutations: Mutations<S, M> = {
  setUsers(state, payload) {
    state.users = payload;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
