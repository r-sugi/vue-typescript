import { Getters, Mutations, Actions } from "vuex";
import { S, G, M, A } from "@/store/github/type";
import { GithubApi } from "@/lib/api/apiClient";
import { GithubUserImpl } from "./class";

const state: S = {
  users: []
};

const actions: Actions<S, A, G, M> = {
  fetchGithubUsers({ commit }) {
    GithubApi.fetchUsers()
      .then(res => {
        commit(
          "setGithubUsers",
          res.data.map(userDTO => new GithubUserImpl(userDTO))
        );
      })
      .catch(e => {
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
