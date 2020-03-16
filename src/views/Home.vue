<template>
  <div class="home">
    <HelloWorld :msg="state.msg + messageTwo" />
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
    const messageTwo = ref<string>("こんにちは");

    return {
      state,
      messageTwo
    };
  }
});
</script>
