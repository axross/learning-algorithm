function linearSearch<Element>({
  list,
  target,
  onStep = () => {}
}: {
  list: Element[];
  target: Element;
  onStep?: (step: LinearSearchStep<Element>) => void;
}): number {
  let index = 0;

  while (index < list.length) {
    const value = list[index];

    onStep({
      currentIndex: index,
      currentValue: value
    });

    if (value === target) {
      return index;
    }

    index = index + 1;
  }

  return -1;
}

export interface LinearSearchStep<Element> {
  readonly currentIndex: number;
  readonly currentValue: Element;
}

export default linearSearch;
