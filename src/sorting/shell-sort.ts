import { OnSwap, SortComparison } from "./event";
import { swap } from "./utility";

function shellSort<Value>({
  array,
  compare,
  padding = Math.floor(array.length / 2),
  onComparison = () => {},
  onSwap = () => {}
}: {
  array: Value[];
  compare: (a: Value, b: Value) => number;
  padding?: number;
  onComparison?: (step: SortComparison<Value>) => void;
  onSwap?: OnSwap<Value>;
}): void {
  while (padding >= 1) {
    let remainder = 0;

    while (remainder < padding) {
      let i = remainder + padding;

      while (i < array.length) {
        let compareWith = i - padding;
        let picked = i;

        while (compareWith >= remainder) {
          onComparison({
            a: { index: picked, value: array[picked] },
            b: { index: compareWith, value: array[compareWith] }
          });

          if (compare(array[picked], array[compareWith]) < 0) {
            swap(array, compareWith, picked, onSwap);
          }

          compareWith = compareWith - padding;
          picked = picked - padding;
        }

        i = i + padding;
      }

      remainder = remainder + 1;
    }

    padding = Math.floor(padding / 2);
  }
}

export default shellSort;
