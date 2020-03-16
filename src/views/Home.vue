<template>
  <div class="home">
    <HelloWorld :msg="state.msg" @click:button="changeMessage" />
    <CounterProvider>
      <InjectedDecrementButton />
      <InjectedCounterDisplay />
      <InjectedIncrementButton />
    </CounterProvider>
    <GlobalCounter />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api";
import HelloWorld from "@/components/HelloWorld.vue";
import CounterProvider from "@/components/CounterProvider.vue";
import InjectedDecrementButton from "@/components/InjectedDecrementButton.vue";
import InjectedIncrementButton from "@/components/InjectedIncrementButton.vue";
import InjectedCounterDisplay from "@/components/InjectedCounterDisplay.vue";
import GlobalCounter from "@/components/GlobalCounter.vue"

export default defineComponent({
  components: {
    HelloWorld,
    CounterProvider,
    InjectedDecrementButton,
    InjectedIncrementButton,
    InjectedCounterDisplay,
    GlobalCounter
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
