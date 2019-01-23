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
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (
      let aIndex = 0, bIndex = 1;
      bIndex < collection.length;
      ++aIndex, ++bIndex
    ) {
      onCompare({
        a: {
          index: aIndex,
          value: collection[aIndex]
        },
        b: {
          index: bIndex,
          value: collection[bIndex]
        }
      });

      if (compare(collection[aIndex], collection[bIndex]) > 0) {
        onSwap({
          a: { index: aIndex, value: collection[aIndex] },
          b: { index: bIndex, value: collection[bIndex] }
        });

        [collection[aIndex], collection[bIndex]] = [
          collection[bIndex],
          collection[aIndex]
        ];

        isSorted = false;
      }
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
