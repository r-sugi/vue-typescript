<template>
  <div>
    {{ count }}
  </div>
</template>

<script lang="ts">
import { computed, SetupContext } from '@vue/composition-api';
export default {
  setup(_, context: SetupContext) {
    const { counter } = context.root.$store
    const count = computed(() => counter.count);

    return {
      count,
    };
  },
};
</script>
