import Compare from "../compare.ts";
import { SearchComparison } from "./event.ts";

function binarySearch<Value>({
  array,
  target,
  compare,
  onComparison = () => {}
}: {
  array: Value[];
  target: Value;
  compare: Compare<Value>;
  onComparison?: (step: SearchComparison<Value>) => void;
}): number {
  let searchRange = new Range(0, array.length - 1);

  while (searchRange.start <= searchRange.end) {
    const picked = array[searchRange.middle];

    if (picked === target) {
      return searchRange.middle;
    }

    onComparison({
      index: searchRange.middle,
      value: picked
    });

    if (compare(picked, target) <= -1) {
      searchRange.start = searchRange.middle + 1;
    } else {
      searchRange.end = searchRange.middle - 1;
    }
  }

  return -1;
}

class Range {
  constructor(public start: number, public end: number) {}

  get middle(): number {
    return Math.floor((this.start + this.end) / 2);
  }
}

export default binarySearch;
