import { SearchComparison } from "./event";

function linearSearch<Value>({
  array,
  target,
  onComparison = () => {}
}: {
  array: Value[];
  target: Value;
  onComparison?: (comparison: SearchComparison<Value>) => void;
}): number {
  let index = 0;

  while (index < array.length) {
    const value = array[index];

    onComparison({ index, value });

    if (value === target) {
      return index;
    }

    index = index + 1;
  }

  return -1;
}

export default linearSearch;
