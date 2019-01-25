import { OnSwap, SortComparison } from "./event";
import { swap } from "./utility";

function selectionSort<Value>({
  array,
  compare,
  onComparison = () => {},
  onSwap = () => {}
}: {
  array: Value[];
  compare: (a: Value, b: Value) => number;
  onComparison?: (step: SortComparison<Value>) => void;
  onSwap?: OnSwap<Value>;
}): void {
  for (let i = 0; i < array.length - 1; ++i) {
    let minimumValueIndex = i;

    for (let j = i + 1; j < array.length; ++j) {
      onComparison({
        a: {
          index: i,
          value: array[j]
        },
        b: {
          index: minimumValueIndex,
          value: array[minimumValueIndex]
        }
      });

      if (compare(array[j], array[minimumValueIndex]) < 0) {
        minimumValueIndex = j;
      }
    }

    if (i === minimumValueIndex) {
      continue;
    }

    swap(array, i, minimumValueIndex, onSwap);
  }
}

export default selectionSort;
