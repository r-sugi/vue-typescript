interface S {
  count: number;
}

interface G {
  double: number;
  expo2: number;
  expo: (amount: number) => number;
}

interface RG {
  "counter/double": G["double"];
  "counter/expo2": G["expo2"];
  "counter/expo": G["expo"];
}

interface M {
  setCount: { amount: number };
  multi: number;
  increment: void;
  decrement: void;
}

interface RM {
  "counter/setCount": M["setCount"];
  "counter/multi": M["multi"];
  "counter/increment": M["increment"];
  "counter/decrement": M["decrement"];
}

interface A {
  asyncSetCount: { amount: number };
  asyncMulti: number;
  asyncIncrement: void;
  asyncDecrement: void;
}

interface RA {
  "counter/asyncSetCount": A["asyncSetCount"];
  "counter/asyncMulti": A["asyncMulti"];
  "counter/asyncIncrement": A["asyncIncrement"];
  "counter/asyncDecrement": A["asyncDecrement"];
}

export { S, G, RG, M, RM, A, RA };
