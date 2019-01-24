import { SearchComparison } from "./event";

function linearSearch<Element>({
  list,
  target,
  onComparison = () => {}
}: {
  list: Element[];
  target: Element;
  onComparison?: (comparison: SearchComparison<Element>) => void;
}): number {
  let index = 0;

  while (index < list.length) {
    const value = list[index];

    onComparison({ index, value });

    if (value === target) {
      return index;
    }

    index = index + 1;
  }

  return -1;
}

export default linearSearch;
