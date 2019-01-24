function bubbleSort<Element>({
  collection,
  compare,
  onComparison = () => {},
  onSwap = () => {}
}: {
  collection: Element[];
  compare: (a: Element, b: Element) => number;
  onComparison?: (step: BubbleSortComparison<Element>) => void;
  onSwap?: (step: BubbleSortSwap<Element>) => void;
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

export interface BubbleSortComparison<Element> {
  a: {
    index: number;
    value: Element;
  };
  b: {
    index: number;
    value: Element;
  };
}

export interface BubbleSortSwap<Element> {
  a: {
    index: number;
    value: Element;
  };
  b: {
    index: number;
    value: Element;
  };
}

export default bubbleSort;
