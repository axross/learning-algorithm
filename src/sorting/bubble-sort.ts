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

    for (let ai = 0, bi = 1; bi < collection.length; ++ai, ++bi) {
      if (compare(collection[ai], collection[bi]) > 0) {
        onStep({
          aIndex: ai,
          bIndex: bi,
          aValue: collection[ai],
          bValue: collection[bi]
        });

        [collection[ai], collection[bi]] = [collection[bi], collection[ai]];

        isSorted = false;
      }
    }
  }
}

export interface BubbleSortStep<Element> {
  aIndex: number;
  bIndex: number;
  aValue: Element;
  bValue: Element;
}

export default bubbleSort;
