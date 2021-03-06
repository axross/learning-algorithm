import Compare from "../compare.ts";
import { OnSwap, SortComparison } from "./event.ts";
import { swap } from "./utility.ts";

function insertionSort<Value>({
  array,
  compare,
  onComparison = () => {},
  onSwap = () => {}
}: {
  array: Value[];
  compare: Compare<Value>;
  onComparison?: (step: SortComparison<Value>) => void;
  onSwap?: OnSwap<Value>;
}): void {
  for (let i = 1; i < array.length; ++i) {
    let compareWith = i - 1;
    let picked = i;

    while (compareWith >= 0) {
      onComparison({
        a: { index: picked, value: array[picked] },
        b: { index: compareWith, value: array[compareWith] }
      });

      if (compare(array[picked], array[compareWith]) < 0) {
        swap(array, compareWith, picked, onSwap);
      } else {
        break;
      }

      compareWith = compareWith - 1;
      picked = picked - 1;
    }
  }
}

export default insertionSort;
