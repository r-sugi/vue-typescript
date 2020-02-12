import "vuex";
import * as Counter from "../store/counter/type";

declare module "vuex" {
  type RootState = {
    counter: Counter.S;
  };
  // type RootGetters = Counter.RG & Todos.RG のように追加していく
  type RootGetters = Counter.RG; // &で連結していく
  type RootMutations = Counter.RM; // &で連結していく
  type RootActions = Counter.RA; // &で連結していく
}
