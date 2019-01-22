function binarySearch<Element>({
  collection,
  target,
  compare,
  onStep
}: {
  collection: Element[];
  target: Element;
  compare: (a: Element, b: Element) => number;
  onStep?: (step: BinarySearchStep<Element>) => void;
}): number {
  let searchRangeStart = 0;
  let searchRangeEnd = collection.length - 1;
  let searchRangeCenter: number;
  let foundTargetIndex: number = -1;

  while (searchRangeStart <= searchRangeEnd) {
    searchRangeCenter = Math.round((searchRangeStart + searchRangeEnd) / 2);

    const pickedElement = collection[Number(searchRangeCenter)];

    const previousElement = collection[searchRangeCenter - 1];
    const nextElement = collection[searchRangeCenter + 1];

    if (previousElement && compare(pickedElement, previousElement) <= 0) {
      throw new UnsortedCollectionError();
    }

    if (nextElement && compare(pickedElement, nextElement) >= 0) {
      throw new UnsortedCollectionError();
    }

    if (onStep) {
      onStep({
        searchFrom: searchRangeStart,
        searchTo: searchRangeEnd,
        pickedIndex: searchRangeCenter,
        pickedElement: pickedElement
      });
    }

    if (pickedElement === target) {
      foundTargetIndex = searchRangeCenter;

      break;
    }

    if (compare(pickedElement, target) <= -1) {
      searchRangeStart = searchRangeCenter + 1;
    } else {
      searchRangeEnd = searchRangeCenter - 1;
    }
  }

  return foundTargetIndex;
}

export interface BinarySearchStep<Element> {
  readonly searchFrom: number;
  readonly searchTo: number;
  readonly pickedIndex: number;
  readonly pickedElement: Element;
}

export class UnsortedCollectionError extends Error {
  constructor() {
    super("collection is not sorted.");

    this.name = "UnsortedCollectionError";
  }
}

export default binarySearch;
