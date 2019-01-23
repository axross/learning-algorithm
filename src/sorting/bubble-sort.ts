function bubbleSort<Element>({
  collection,
  compare,
  onStep = () => {}
}: {
  collection: Element[];
  compare: (a: Element, b: Element) => number;
  onStep?: (step: BubbleSortStep<Element>) => void;
}): void {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (
      let aIndex = 0, bIndex = 1;
      bIndex < collection.length;
      ++aIndex, ++bIndex
    ) {
      if (compare(collection[aIndex], collection[bIndex]) > 0) {
        onStep({
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

export interface BubbleSortStep<Element> {
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
