<template>
  <div>
    {{ result }}
  </div>
</template>

<script lang="ts">
import { onServerPrefetch, SetupContext, ref } from '@vue/composition-api';
import { GithubApi } from '@/lib/api/apiClient.ts'

export default {
  name: 'users',
  setup (props, context: SetupContext) {
    const result = ref(1);

    return {
      result,
    };
  },
}
</script>
<style lang="scss">
</style>
