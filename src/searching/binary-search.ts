function binarySearch<Element>({
  collection,
  target,
  onStep = () => {}
}: {
  collection: Element[];
  target: Element;
  onStep?: (step: BinarySearchStep<Element>) => void;
}): number {
  let searchRangeStart = 0;
  let searchRangeEnd = collection.length - 1;
  let searchRangeCenter: number;
  let foundTargetIndex: number = -1;

  while (searchRangeStart <= searchRangeEnd) {
    searchRangeCenter = Math.round((searchRangeStart + searchRangeEnd) / 2);

    const pickedElement = collection[Number(searchRangeCenter)];

    if (
      collection[searchRangeCenter - 1] !== null &&
      collection[searchRangeCenter - 1] >= pickedElement
    ) {
      throw new UnsortedCollectionError();
    }

    if (
      collection[searchRangeCenter + 1] !== null &&
      collection[searchRangeCenter + 1] <= pickedElement
    ) {
      throw new UnsortedCollectionError();
    }

    if (pickedElement === target) {
      foundTargetIndex = searchRangeCenter;

      onStep({
        searchFrom: searchRangeStart,
        searchTo: searchRangeEnd,
        pickedIndex: searchRangeCenter,
        pickedElement: pickedElement
      });

      break;
    }

    onStep({
      searchFrom: searchRangeStart,
      searchTo: searchRangeEnd,
      pickedIndex: searchRangeCenter,
      pickedElement: pickedElement
    });

    if (pickedElement < target) {
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
