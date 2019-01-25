import { OnSwap } from "./event";

export function swap<Value>(
  arr: Value[],
  a: number,
  b: number,
  onSwap: OnSwap<Value> = () => {}
) {
  const oldAValue = arr[a];
  const oldBValue = arr[b];

  [arr[a], arr[b]] = [oldBValue, oldAValue];

  onSwap({
    a: { index: a, value: oldAValue },
    b: { index: b, value: oldBValue }
  });
}
