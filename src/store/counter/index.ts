import { reactive } from "@vue/composition-api";

export type CountObj = {
  readonly hoge: string;
  readonly foo: number;
};

export const counterStore = () => {
  const state = reactive({
    count: 0,
    countObj: {
      hoge: "some string",
      foo: 1
    }
  });

  return {
    get count() {
      return state.count;
    },

    get countObj(): CountObj {
      return state.countObj;
    },

    increment() {
      state.count += 2;
    },

    decrement() {
      state.count -= 1;
    }
  };
};

export type CounterStore = ReturnType<typeof counterStore>;
