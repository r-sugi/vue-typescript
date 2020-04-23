<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <button @click="hoge">emit example</button>
    <div>
      <button @click="decrement">
        -
      </button>
      <span class="count">
        {{ count }}
      </span>
      <button @click="increment">
        +
      </button>
      <p>{{ test }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext,
  onMounted,
  onUpdated,
  onUnmounted,
  toRefs,
  computed
} from "@vue/composition-api";

type Props = {
  msg: string;
};

import { counterStore } from "@/store/counter";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
      default: "default Value"
    }
  },
  setup(props: Props, context: SetupContext) {
    onMounted(() => {
      console.log("HelloWorld mounted!");
    });
    onUpdated(() => {
      console.log("HelloWorld updated!");
    });
    onUnmounted(() => {
      console.log("HelloWorld unmounted!");
    });

    const counter = counterStore();
    const count = computed(() => counter.count);

    const hoge = () => {
      context.emit("click:button", props.msg.toUpperCase());
    };

    counter.increment();

    return {
      hoge,
      test: counter.countObj.foo,
      count,
      increment: () => counter.increment(),
      decrement() {
        counter.decrement();
      }
    };
  }
});
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
