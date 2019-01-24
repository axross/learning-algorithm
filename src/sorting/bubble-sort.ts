import { SortComparison, SortSwap } from "./event";

function bubbleSort<Value>({
  array,
  compare,
  onComparison = () => {},
  onSwap = () => {}
}: {
  array: Value[];
  compare: (a: Value, b: Value) => number;
  onComparison?: (step: SortComparison<Value>) => void;
  onSwap?: (step: SortSwap<Value>) => void;
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
        const aValue = array[a];
        const bValue = array[b];

        [array[a], array[b]] = [bValue, aValue];

        onSwap({
          a: { index: a, value: aValue },
          b: { index: b, value: bValue }
        });

        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }
}

export default bubbleSort;
