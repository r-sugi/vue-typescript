<template>
  <div class="home">
    <HelloWorld
      :msg="state.msg"
      @click:button="changeMessage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api";
import HelloWorld from '@/components/HelloWorld.vue'
export default defineComponent({
  components: {
    HelloWorld
  },
  setup() {
    const state = reactive<{ msg: string }>({
      msg: "Hello"
    });

    const changeMessage = (message: string) => {
      state.msg = message;
    };

    return {
      state,
      changeMessage
    };
  }
});
</script>
