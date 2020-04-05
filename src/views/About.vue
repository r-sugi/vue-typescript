<template>
  <div class="about">
    <testVmContainer />
    <testContainer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import testContainer from "@/containers/testContainer.vue";
import testVmContainer from "@/containers/testVmContainer.vue";
export default Vue.extend({
  components: {
    testContainer,
    testVmContainer
  }
});
</script>
