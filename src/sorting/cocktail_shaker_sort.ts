import Compare from "../compare.ts";
import { OnSwap, SortComparison } from "./event.ts";
import { swap } from "./utility.ts";

function cocktailShakerSort<Value>({
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
        swap(array, a, b, onSwap);

        isSwapped = true;
      }

      if (isAscendingScan) {
        a = a + 1;
        b = b + 1;
      } else {
        a = a - 1;
        b = b - 1;
      }
    }

    if (!isSwapped) {
      break;
    }

    i = i + 1;
  }
}

export default cocktailShakerSort;
