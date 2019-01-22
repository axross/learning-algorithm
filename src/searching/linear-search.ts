function linearSearch<Element>({
  collection,
  target,
  onStep = () => {}
}: {
  collection: Element[];
  target: Element;
  onStep?: (step: LinearSearchStep<Element>) => void;
}): number {
  let index = 0;

  while (index < collection.length) {
    onStep({
      currentIndex: index,
      currentValue: collection[index]
    });

    if (collection[index] === target) {
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
