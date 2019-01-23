function binarySearch<Element>({
  list,
  target,
  compare,
  onCompare = () => {}
}: {
  list: Element[];
  target: Element;
  compare: (a: Element, b: Element) => number;
  onCompare?: (step: BinarySearchComparison<Element>) => void;
}): number {
  let searchRangeStart = 0;
  let searchRangeEnd = list.length - 1;
  let searchRangeMiddle: number;
  let foundTargetIndex: number = -1;

  while (searchRangeStart <= searchRangeEnd) {
    searchRangeMiddle = Math.floor((searchRangeStart + searchRangeEnd) / 2);

    const picked = list[searchRangeMiddle];

    if (picked === target) {
      foundTargetIndex = searchRangeMiddle;

      break;
    }

    onCompare({
      index: searchRangeMiddle,
      value: picked
    });

    if (compare(picked, target) <= -1) {
      searchRangeStart = searchRangeMiddle + 1;
    } else {
      searchRangeEnd = searchRangeMiddle - 1;
    }
  }

  return foundTargetIndex;
}

export interface BinarySearchComparison<Element> {
  index: number;
  value: Element;
}

export default binarySearch;
