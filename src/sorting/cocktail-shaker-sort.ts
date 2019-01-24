import { SortComparison, SortSwap } from "./event";

function cocktailShakerSort<Value>({
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
  let i = 0;
  let maxScanTimes = array.length * 2;

  while (i <= maxScanTimes) {
    const isAscendingScan = i % 2 === 0;
    const scanStart = 0 + Math.floor(i / 2);
    const scanEnd = array.length - 1 - Math.ceil(i / 2);
    let a = isAscendingScan ? scanStart : scanEnd - 1;
    let b = isAscendingScan ? scanStart + 1 : scanEnd;
    let isSwapped = false;

    while (
      (isAscendingScan && b <= scanEnd) ||
      (!isAscendingScan && a >= scanStart)
    ) {
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

      if (isAscendingScan) {
        ++a;
        ++b;
      } else {
        --a;
        --b;
      }
    }

    if (!isSwapped) {
      break;
    }

    ++i;
  }
}

export default cocktailShakerSort;
