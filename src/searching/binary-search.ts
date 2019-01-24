import { SearchComparison } from "./event";

function binarySearch<Value>({
  array,
  target,
  compare,
  onComparison = () => {}
}: {
  array: Value[];
  target: Value;
  compare: (a: Value, b: Value) => number;
  onComparison?: (step: SearchComparison<Value>) => void;
}): number {
  let searchRangeStart = 0;
  let searchRangeEnd = array.length - 1;
  let searchRangeMiddle: number;
  let foundTargetIndex: number = -1;

  while (searchRangeStart <= searchRangeEnd) {
    searchRangeMiddle = Math.floor((searchRangeStart + searchRangeEnd) / 2);

    const picked = array[searchRangeMiddle];

    if (picked === target) {
      foundTargetIndex = searchRangeMiddle;

      break;
    }

    onComparison({
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

export default binarySearch;
