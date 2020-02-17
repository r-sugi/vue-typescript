import "vuex";
import * as Counter from "@/store/counter/type";
import * as Github from "@/store/github/type";

declare module "vuex" {
  type RootState = {
    counter: Counter.S;
    github: Github.S;
  };
  // type RootGetters = Counter.RG & Todos.RG のように追加していく
  type RootGetters = Counter.RG & Github.RG; // &で連結していく
  type RootMutations = Counter.RM & Github.RM; // &で連結していく
  type RootActions = Counter.RA & Github.RA; // &で連結していく
}
