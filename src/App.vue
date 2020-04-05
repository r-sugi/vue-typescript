<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import * as Vuex from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions } from "vuex";

@Component({
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions("github", ["fetchGithubUsers"])
  }
})
export default class AppComponent extends Vue {
  $store!: Vuex.ExStore;

  test = "ff";

  created() {
    this.fetchGithubUsers();
  }

  get users() {
    return this.$store.state.github.users;
  }

  fetchGithubUsers!: () => void;
}
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
