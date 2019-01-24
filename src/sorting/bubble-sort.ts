import { SortComparison, SortSwap } from "./event";

function bubbleSort<Element>({
  collection,
  compare,
  onComparison = () => {},
  onSwap = () => {}
}: {
  collection: Element[];
  compare: (a: Element, b: Element) => number;
  onComparison?: (step: SortComparison<Element>) => void;
  onSwap?: (step: SortSwap<Element>) => void;
}): void {
  for (let i = 0; i < collection.length; ++i) {
    let isSwapped = false;

    for (let a = 0, b = 1; b < collection.length - i; ++a, ++b) {
      const shouldABeforeB = compare(collection[a], collection[b]) > 0;

      onComparison({
        a: { index: a, value: collection[a] },
        b: { index: b, value: collection[b] }
      });

      if (shouldABeforeB) {
        const aValue = collection[a];
        const bValue = collection[b];

        [collection[a], collection[b]] = [bValue, aValue];

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
