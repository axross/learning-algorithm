function binarySearch<Element>({
  list,
  target,
  compare,
  onStep = () => {}
}: {
  list: Element[];
  target: Element;
  compare: (a: Element, b: Element) => number;
  onStep?: (step: BinarySearchStep<Element>) => void;
}): number {
  let searchRangeStart = 0;
  let searchRangeEnd = list.length - 1;
  let searchRangeMiddle: number;
  let foundTargetIndex: number = -1;

  while (searchRangeStart <= searchRangeEnd) {
    searchRangeMiddle = Math.floor((searchRangeStart + searchRangeEnd) / 2);

    const picked = list[searchRangeMiddle];

    onStep({
      searchRange: {
        start: searchRangeStart,
        end: searchRangeEnd
      },
      middle: {
        index: searchRangeMiddle,
        value: picked
      }
    });

    if (picked === target) {
      foundTargetIndex = searchRangeMiddle;

      break;
    }

    if (compare(picked, target) <= -1) {
      searchRangeStart = searchRangeMiddle + 1;
    } else {
      searchRangeEnd = searchRangeMiddle - 1;
    }
  }

  return foundTargetIndex;
}

export interface BinarySearchStep<Element> {
  readonly searchRange: {
    start: number;
    end: number;
  };
  readonly middle: {
    index: number;
    value: Element;
  };
}

export default binarySearch;
