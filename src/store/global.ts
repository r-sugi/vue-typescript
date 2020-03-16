import { counterStore } from './counter';

export const globalStore = () => {
  return {
    counter: counterStore(),
  };
}

export type GlobalStore = ReturnType<typeof globalStore>;
