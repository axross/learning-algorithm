function cocktailShakerSort<Element>({
  collection,
  compare,
  onComparison = () => {},
  onSwap = () => {}
}: {
  collection: Element[];
  compare: (a: Element, b: Element) => number;
  onComparison?: (step: CocktailShakerSortComparison<Element>) => void;
  onSwap?: (step: CocktailShakerSortSwap<Element>) => void;
}): void {
  let i = 0;
  let maxScanTimes = collection.length * 2;

  while (i <= maxScanTimes) {
    const isAscendingScan = i % 2 === 0;
    const scanStart = 0 + Math.floor(i / 2);
    const scanEnd = collection.length - 1 - Math.ceil(i / 2);
    let a = isAscendingScan ? scanStart : scanEnd - 1;
    let b = isAscendingScan ? scanStart + 1 : scanEnd;
    let isSwapped = false;

    while (
      (isAscendingScan && b <= scanEnd) ||
      (!isAscendingScan && a >= scanStart)
    ) {
      const shouldABeforeB = compare(collection[a], collection[b]) > 0;

      onComparison({
        a: { index: a, value: collection[a] },
        b: { index: b, value: collection[b] }
      });

      if (shouldABeforeB) {
        const aValue = collection[a];
        const bValue = collection[b];

        [collection[a], collection[b]] = [bValue, aValue];

        onSwap({
          a: { index: a, value: aValue },
          b: { index: b, value: bValue }
        });

        isSwapped = true;
      }

      if (isAscendingScan) {
        ++a;
        ++b;
      } else {
        --a;
        --b;
      }
    }

    if (!isSwapped) {
      break;
    }

    ++i;
  }
}

export interface CocktailShakerSortComparison<Element> {
  a: {
    index: number;
    value: Element;
  };
  b: {
    index: number;
    value: Element;
  };
}

export interface CocktailShakerSortSwap<Element> {
  a: {
    index: number;
    value: Element;
  };
  b: {
    index: number;
    value: Element;
  };
}

export default cocktailShakerSort;
