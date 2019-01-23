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

    onStep({ index, value });

    if (value === target) {
      return index;
    }

    index = index + 1;
  }

  return -1;
}

export interface LinearSearchStep<Element> {
  readonly index: number;
  readonly value: Element;
}

export default linearSearch;
