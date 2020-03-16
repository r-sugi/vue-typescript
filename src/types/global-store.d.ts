// FIXME: this file is not imported?
import Vue from 'vue';
import { GlobalStore } from '../store/global';

declare module 'vue/types/vue' {
  interface Vue {
    readonly $store: Readonly<GlobalStore>;
  }
}
