function linearSearch<Element>({
  list,
  target,
  onCompare = () => {}
}: {
  list: Element[];
  target: Element;
  onCompare?: (comparison: LinearSearchComparison<Element>) => void;
}): number {
  let index = 0;

  while (index < list.length) {
    const value = list[index];

    onCompare({ index, value });

    if (value === target) {
      return index;
    }

    index = index + 1;
  }

  return -1;
}

export interface LinearSearchComparison<Element> {
  index: number;
  value: Element;
}

export default linearSearch;
