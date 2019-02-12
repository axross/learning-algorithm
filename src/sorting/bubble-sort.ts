import Compare from "../compare";
import { OnSwap, SortComparison } from "./event";
import { swap } from "./utility";

function bubbleSort<Value>({
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
  for (let i = 0; i < array.length; ++i) {
    let isSwapped = false;

    for (let a = 0, b = 1; b < array.length - i; ++a, ++b) {
      const shouldABeforeB = compare(array[a], array[b]) > 0;

      onComparison({
        a: { index: a, value: array[a] },
        b: { index: b, value: array[b] }
      });

      if (shouldABeforeB) {
        swap(array, a, b, onSwap);

        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }
}

export default bubbleSort;
