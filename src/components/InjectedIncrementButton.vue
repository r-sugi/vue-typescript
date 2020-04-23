<template>
  <button @click="increment">
    +
  </button>
</template>

<script lang="ts">
import { computed, inject } from "@vue/composition-api";
import CounterKey from "./counter-key";

export default {
  setup() {
    const counter = inject(CounterKey);
    if (!counter) {
      throw new Error(`${CounterKey} is not provided`);
    }

    return {
      increment: counter.increment
    };
  }
};
</script>
