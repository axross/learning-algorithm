function bubbleSort<Element>({
  collection,
  compare,
  onCompare = () => {},
  onSwap = () => {}
}: {
  collection: Element[];
  compare: (a: Element, b: Element) => number;
  onCompare?: (step: BubbleSortComparison<Element>) => void;
  onSwap?: (step: BubbleSortSwap<Element>) => void;
}): void {
  let isSwapped = false;

  do {
    isSwapped = false;

    for (let a = 0, b = 1; b < collection.length; ++a, ++b) {
      onCompare({
        a: { index: a, value: collection[a] },
        b: { index: b, value: collection[b] }
      });

      if (compare(collection[a], collection[b]) > 0) {
        onSwap({
          a: { index: a, value: collection[a] },
          b: { index: b, value: collection[b] }
        });

        [collection[a], collection[b]] = [collection[b], collection[a]];

        isSwapped = true;
      }
    }
  } while (isSwapped);
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
