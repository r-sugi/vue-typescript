import { Getters, Mutations, Actions } from "vuex";
import { S, G, M, A } from "@/store/github/type";
import { GithubApi } from "@/lib/api/apiClient";

const state: S = {
  users: []
};

const actions: Actions<S, A, G, M> = {
  fetchGithubUsers({ commit }) {
    console.log('actions')
    GithubApi.fetchUsers()
      .then(res => {
        console.log('then')
        commit(
          "setGithubUsers",
          res.data
        );
      })
      .catch(e => {
        console.log('error')
        throw e;
      });
  }
};

const mutations: Mutations<S, M> = {
  setGithubUsers(state, payload) {
    state.users = payload;
  }
};

const getters: Getters<S, G> = {
  users(state) {
    return state.users;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
