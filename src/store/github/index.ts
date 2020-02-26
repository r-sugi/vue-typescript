import { Getters, Mutations, Actions } from "vuex";
import { S, G, M, A } from "@/store/github/type";
import { GithubApi } from "@/lib/api/apiClient";
import { GithubUser } from "./class";

const state: S = {
  users: []
};

const actions: Actions<S, A, G, M> = {
  fetchGithubUsers({ commit }) {
    GithubApi.fetchUsers()
      .then(res => {
        commit(
          "setGithubUsers",
          res.data.map(userDTO => new GithubUser(userDTO))
        );
      })
      .catch(e => {
        throw e
        // console.log(e.response);
        // console.log(e.response.status);
        // console.log(e.message);
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
