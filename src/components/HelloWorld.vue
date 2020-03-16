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
  toRefs
} from "@vue/composition-api";

type Props = {
  msg: string;
};

const useCount = () => {
  const countState = reactive({ count: 0 });
  return {
    ...toRefs(countState), // 参照をつける
  };
};


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

    const { count } = useCount();

    const hoge = () => {
      context.emit("click:button", props.msg.toUpperCase());
    };

    return {
      hoge,
      count,
      increment() {
        count.value++
      },
      decrement() {
        count.value--
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
