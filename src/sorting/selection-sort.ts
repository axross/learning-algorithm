function selectionSort<Element>({
  collection,
  compare,
  onStep = () => {}
}: {
  collection: Element[];
  compare: (a: Element, b: Element) => number;
  onStep?: (step: SelectionSortStep<Element>) => void;
}): void {
  for (let i = 0; i < collection.length - 1; ++i) {
    let minimumValueIndex = i;

    for (let j = i + 1; j < collection.length; ++j) {
      if (compare(collection[j], collection[minimumValueIndex]) < 0) {
        minimumValueIndex = j;
      }
    }

    if (i === minimumValueIndex) {
      continue;
    }

    onStep({
      replaceTarget: {
        index: i,
        value: collection[i]
      },
      replaceWith: {
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

export interface SelectionSortStep<Element> {
  replaceTarget: {
    index: number;
    value: Element;
  };
  replaceWith: {
    index: number;
    value: Element;
  };
}

export default selectionSort;
