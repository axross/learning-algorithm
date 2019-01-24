import { SortComparison, SortSwap } from "./event";

function selectionSort<Element>({
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
  for (let i = 0; i < collection.length - 1; ++i) {
    let minimumValueIndex = i;

    for (let j = i + 1; j < collection.length; ++j) {
      onComparison({
        a: {
          index: i,
          value: collection[j]
        },
        b: {
          index: minimumValueIndex,
          value: collection[minimumValueIndex]
        }
      });

      if (compare(collection[j], collection[minimumValueIndex]) < 0) {
        minimumValueIndex = j;
      }
    }

    if (i === minimumValueIndex) {
      continue;
    }

    const aValue = collection[i];
    const bValue = collection[minimumValueIndex];

    [collection[i], collection[minimumValueIndex]] = [bValue, aValue];

    onSwap({
      a: {
        index: i,
        value: collection[i]
      },
      b: {
        index: minimumValueIndex,
        value: collection[minimumValueIndex]
      }
    });
  }
}

export default selectionSort;
