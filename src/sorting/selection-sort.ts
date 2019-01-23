function selectionSort<Element>({
  collection,
  compare,
  onCompare = () => {},
  onSwap = () => {}
}: {
  collection: Element[];
  compare: (a: Element, b: Element) => number;
  onCompare?: (step: SelectionSortSwap<Element>) => void;
  onSwap?: (step: SelectionSortSwap<Element>) => void;
}): void {
  for (let i = 0; i < collection.length - 1; ++i) {
    let minimumValueIndex = i;

    for (let j = i + 1; j < collection.length; ++j) {
      onCompare({
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

    [collection[i], collection[minimumValueIndex]] = [
      collection[minimumValueIndex],
      collection[i]
    ];
  }
}

export interface SelectionSortComparison<Element> {
  a: {
    index: number;
    value: Element;
  };
  b: {
    index: number;
    value: Element;
  };
}

export interface SelectionSortSwap<Element> {
  a: {
    index: number;
    value: Element;
  };
  b: {
    index: number;
    value: Element;
  };
}

export default selectionSort;
