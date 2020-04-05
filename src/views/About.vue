<template>
  <div class="about">
    <testContainer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import testContainer from "@/containers/testContainer.vue";
export default Vue.extend({
  components: {
    testContainer
  }
});
</script>
