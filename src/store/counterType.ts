interface State {
  count: number;
}

interface IGetters {
  double: number;
  expo2: number;
  expo: (amount: number) => number;
}

interface IMutations {
  setCount: { amount: number };
  multi: number;
  increment: void;
}

interface IActions {
  asyncSetCount: { amount: number };
  asyncMulti: number;
  asyncIncrement: void;
}

export { State, IGetters, IMutations, IActions };
