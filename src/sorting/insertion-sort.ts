function insertionSort<Element>({
  collection,
  compare,
  onComparison = () => {},
  onInsertion = () => {}
}: {
  collection: Element[];
  compare: (a: Element, b: Element) => number;
  onComparison?: (step: InsertionSortComparison<Element>) => void;
  onInsertion?: (step: InsertionSortInsertion<Element>) => void;
}): void {
  for (let i = 1; i < collection.length; ++i) {
    let insertBefore = i;

    for (let j = 0; j < i; ++j) {
      onComparison({
        a: { index: i, value: collection[i] },
        b: { index: j, value: collection[j] }
      });

      if (compare(collection[i], collection[j]) < 0 && j < insertBefore) {
        insertBefore = j;
      }
    }

    const iValue = collection[i];
    const bValue = collection[insertBefore];

    collection.splice(i, 1);
    collection.splice(insertBefore, 0, iValue);

    onInsertion({
      chosen: { index: i, value: iValue },
      before: { index: insertBefore, value: bValue }
    });
  }
}

export interface InsertionSortComparison<Element> {
  a: {
    index: number;
    value: Element;
  };
  b: {
    index: number;
    value: Element;
  };
}

export interface InsertionSortInsertion<Element> {
  chosen: {
    index: number;
    value: Element;
  };
  before: {
    index: number;
    value: Element;
  };
}

export default insertionSort;
