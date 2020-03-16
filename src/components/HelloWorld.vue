<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h2>{{ state.localMsg }}</h2>
    <button @click="hoge">emit example</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext } from "@vue/composition-api";

type Props = {
  msg: string
}
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
      default: "default Value"
    }
  },
  setup(props: Props, context: SetupContext) {
    const state = reactive<{ localMsg: string }>({
      localMsg: "helloWorld"
    });

    const hoge = () => {
      context.emit("click:button", props.msg.toUpperCase());
    };

    return {
      state,
      hoge
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
