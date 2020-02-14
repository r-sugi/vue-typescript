<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { GithubApi } from "@/lib/api/apiClient";

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld
  },
  async created() {
    GithubApi
      .fetchUsers()
      .then(users => console.log(users))
      .catch(e => {
        console.log(e.response)
        console.log(e.response.status)
        console.log(e.message)
      });
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
