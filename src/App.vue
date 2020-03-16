<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>{{ messageTwo }}</p>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api";
import HelloWorld from "@/components/HelloWorld.vue";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld
  },
  setup(_, context) {
    const messageTwo = ref<string>("App.vue hello");
    return {
      messageTwo
    };
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
