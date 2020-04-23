<template>
  <div>
    {{ result }}
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/composition-api";

export default {
  name: "users",
  setup() {
    const result = ref(1);

    return {
      result
    };
  }
};
</script>
<style lang="scss"></style>
