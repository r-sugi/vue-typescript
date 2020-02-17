<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <template v-if="users.length > 0">
      <div v-for="u in users" :key="u.id">
        <p>{{ u.hoge }}</p>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions("github", ["fetchGithubUsers"])
  },
  created() {
    this.fetchGithubUsers();
  },
  computed: {
    users() {
      return this.$store.state.github.users;
    }
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
