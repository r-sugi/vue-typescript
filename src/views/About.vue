<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import * as Vuex from "vuex";
@Component
export default class AboutComponent extends Vue {
  $store!: Vuex.ExStore;
}
</script>
