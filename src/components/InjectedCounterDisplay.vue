<template>
  <span class="count">
    {{ count }}
  </span>
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
    const count = computed(() => counter.count);

    return {
      count
    };
  }
};
</script>
